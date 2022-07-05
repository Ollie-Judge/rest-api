const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; //grabbed password variable from body, and stored it locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); //hashed the password and stored it in a new constant
    // req.body.password = hashedPass; //stores freshly hashed password back in the req body
    req.body.password = await bcrypt.hash(req.body.password, 8); //all steps above, condensed into 1 line
    next(); //moves onto next middleware/controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};