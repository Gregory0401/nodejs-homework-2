const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(`${__dirname}`, 'models/contacts.json')



const listContacts = async () => {
    const data = await fs.readFile(contactsPath)
     return JSON.parse(data) 
}

const getContactById = async (contactId) => {
  const products = await listContacts()
  const res = products.find((item) => item.id === contactId)
  return res ? res : null
}

const removeContact = async (contactId) => {
  const products = await listContacts()

  const idx = products.findIndex((item) => item.id === contactId)
  if (idx === -1) {
    return null
  }
  console.log(idx)
  products.splice(idx, 1)
  await fs.writeFile(contactsPath, JSON.stringify(products))
  return products
}

const addContact = async (name, email, phone) => {
  const contactsAll = await listContacts()

  const newContact = { name, email, phone, id: v4() }
  contactsAll.push(newContact)
  await fs.writeFile(contactsPath, JSON.stringify(contactsAll))

  return newContact
}

const updateContact = async (contactId, body) => {
    const contact = await getContactById(contactId);
    return contact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
