const Joi = require("joi");


const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string()
              .trim()
              .length(10)
              .pattern(/^[0-9]+$/)
              .required().required()
    })

const schemaUpdate = Joi.object({
        name: Joi.string().required(),
        email:Joi.string().required(),
        phone:Joi.string().required()
        }).min(1)  


module.exports = {
    addSchema,
    schemaUpdate
}      