const { uniqid } = require("uniqid")
const {User} = require("../../models/user")
const {HttpError, sendEmail} = require("../../helpers")
const bcrypt =require("bcryptjs")
const gravatar = require("gravatar")
const {BASE_URL} = process.env


const register = async(req, res) => {
const {email, password} = req.body;
const user = await User.findOne({email});
if(user){
    throw HttpError( 409, " Email in use")
}
const hashPassword = await bcrypt.hash(password, 10);
const avatarUrl = gravatar.url(email);
const verificationCode = uniqid();
const newUser = await User.create({email, password: hashPassword, avatarUrl, verificationCode});

const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click to verify</a>`
}

await sendEmail(mail)

res.status(201).json({
    email: newUser.email,
})
}

module.exports = register;