const contacts = require("../../models/contacts.js");
const {HttpError} = require("../../helpers")

const updateById = async (req, res, next) => {
    
     
      const {contactId} = req.params;
      const result = await contacts.updateContact(contactId, req.body);
      if(!result){
          throw HttpError(404)
      }
      res.json(result);
      
    
  }
  module.exports = updateById