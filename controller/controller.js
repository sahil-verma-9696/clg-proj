const userModel = require("./../userModel/userMode"); // including user models from custom module
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

const login = async (req,res)=>{
    try {
        const loginData = req.body;
        if(loginData){
            const authUser = await userModel.findOne({
                userName:loginData.userName
            })
            if(authUser){
                if(!req.session.user){
                    req.session.user = loginData
                    res.json({msg:"welcome you session started"});
                }else{
                    res.json({error:"invalid user id and password"})
                }
            }else{
                res.json({error:"user not exist"});
            }
        }else{
            res.json({error:"can't get user detail"})
        }
        
    } catch (error) {
        console.log(error)
    }
}

const logout = (req,res)=>{
    try {
        const reqest = req.body;
        if(reqest){
            req.session.destroy()
            res.redirect("/login")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registration,
    login,
    logout
}