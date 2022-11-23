const {Contact} = require("../../models/contact");
const { HttpError } = require("../../helpers");

const removeById = async (req, res) => {
    
      const {contactId} = req.params;
      const result = await Contact.findByIdAndRemove(contactId);
      if(!result) {
        throw HttpError(404);
      }
      res.json({
        message: "Contact deleted"
      })
    
  }

  module.exports = removeById