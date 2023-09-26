const userModel = require("./../userModel/userMode"); // including user models from custom module
const bcrypt = require("bcrypt");

const registration = async (req, res) => {

    try {
        const userData = req.body;

        // Validate data (you can use a validation library like Joi here)
        if (!userData.crn || !userData.name || !userData.password) {
            return res.status(400).json({ error: 'Invalid request data' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Create a new user document
        const newUser = new userModel({
            crn: userData.crn,
            name: userData.name,
            password: hashedPassword,
            contact: userData.contact,
            eMail: userData.eMail,
            course: userData.course,
            branch: userData.branch,
            complaint: userData.complaint
            
        });

        // Save the user to the database
        await newUser.save();

        res.json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

const login = async (req, res) => {
    try {
        const loginData = req.body;

        if (!loginData) {
            return res.status(400).json({ error: "Invalid request data" });
        }

        const authUser = await userModel.findOne({ crn: loginData.crn });

        if (!authUser) {
            return res.status(401).json({ error: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(loginData.password, authUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        if (!req.session.user) {
            // Store only necessary user information in the session
            req.session.user = {
                crn: authUser.crn,
                name: authUser.name
            };
            return res.json({ msg: "Welcome, your session has started" });
        } else {
            return res.status(400).json({ error: "Session already active" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const logout = (req, res) => {
    try {
      if(req.session.user){
        res.clearCookie("AuthUser").json({ msg: "logout successfull" })
      }else{
        res.status(400).json({error:"no session exist"})
      }
    } catch (error) {
        console.log(error)
    }
}

const session = (req, res) => {
    if (req.session.user) {
        res.json({ status: true })
    } else {
        res.json({ status: false })
    }
}

module.exports = {
    registration,
    login,
    logout,
    session
}