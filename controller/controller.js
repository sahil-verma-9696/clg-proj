const userModel = require("./../userModel/userMode");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
    try {

        const userData = await userModel.findOne({
            userName: req.body.userName
        })

        if(!userData){
            const passwordHash = await bcrypt.hash(req.body.password, 10);

            const user = new userModel({
                userName: req.body.userName,
                password: passwordHash,
                contact: req.body.contact
            });
    
            await user.save();
            console.log(req.body);
            res.json({msg:"registration complete"});
        }else{
            res.json({error:"user already exist"});
        }
        
    } catch (error) {
        console.log(error)
        res.json({error:"server not responding"})
    }
}

module.exports = {
    registration
}