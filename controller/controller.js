const userModel = require("./../userModel/userMode");

const registration = async (req,res)=>{
    const user = new userModel(req.body);
    await user.save();
    console.log(req.body);
    res.json(req?.body)
}

module.exports = {
    registration
}