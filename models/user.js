const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleSaveErrors} = require("../helpers");
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

const userSchema = new Schema({
    
        password: {
          type: String,
          required: [true, 'Password is required'],
          minlength: 6,
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          match: emailRegexp,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
        owner: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
        avatarURL: {
          type: String,
          required: true
        },
        verify:{
          type: Boolean,
          default: false
        },
        verificationCode: {
          type: String,
        }
      
}, {versionKey: false, timestamps: true})

userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})

const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
    verifySchema
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas
}