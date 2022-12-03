const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env;
const {HttpError} = require("../helpers")
const {User} = require("../models/user")

const authenticate = async (req, res, next) => {
const {autorization} = req.headers;
const [bearer, token] = autorization.split(" ");
if(bearer !== "Bearer"){
    next(HttpError(401))
}
try{
    const {id} = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if(!user){
        next(HttpError(401))
    }
    if(!user.token){
        next(HttpError(401))
    }
    req.user = user;
    next()
}
catch(error){
    next(HttpError(401))
}
}

module.exports = authenticate;