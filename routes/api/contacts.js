const express = require('express')

const contacts = require("../../models/contacts.js");
const router = express.Router();
const { validationForPost, validationForPut } = require("./validation");
module.exports = router;
const {HttpError} = require("../../helpers");
const Joi = require("joi");


const addSchema = Joi.object({
name: Joi.string().required(),
email:Joi.string().required(),
phone:Joi.string().required()
})

const schemaUpdate = Joi.object({
  name: Joi.string().required(),
  email:Joi.string().required(),
  phone:Joi.string().required()
  }).min(1)

router.get('/', async (req, res, next) => {
  try{
    const result = await contacts.listContacts();
    res.json(result)
  }
  catch(error){
next(error)
  }
});

router.get('/:contactId', async (req, res, next) => {
  try{
    const {contactId} = req.params;
    const result = await contacts.getContactById(contactId);
    if(!result) {
      throw HttpError(404, "Not found")
    }
    res.json(result);
  } catch(error){
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {error} = addSchema.validate(req.body);
    if(error){
      throw HttpError(400, error.message)
    }
    const result = await contacts.addContact(req.body); 
    res.status(201).json(result);
  } catch (error) {
    
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const result = await contacts.removeContact(contactId);
    if(!result) {
      throw HttpError(404);
    }
    res.json({
      message: "Contact deleted"
    })
  } catch (error) {
    next(error)
  };
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const {error} = schemaUpdate.validate(req.body);
    if(error){
      throw HttpError(400, error.message)
    }
    const {contactId} = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    res.json(result);
    if(!result) {
      throw HttpError(404);
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
