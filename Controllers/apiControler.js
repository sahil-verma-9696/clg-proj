const Students = require("./../Models/userModel");
const nodeMailer = require("nodemailer");
const path = require("path");

const login = async (req, res) => {
    const request = req.body;

    try {
        if (request) {
            const user = await Students.findOne({ crn: request.crn });
            if (user) {
                if (request.password == user.password) {
                    res.cookie("contact", user.contact);
                    res.cookie("user", user.name);
                    res.cookie("crn", user.crn);
                    res.redirect("/categories");
                } else {
                    return res.render("Login/login", { msg: "User and Password Invalid", userStatus: false });
                }
            } else {
                return res.render("Login/login", { msg: "User not found", userStatus: false });
            }
        } else {
            return res.render("Login/login", { msg: "request not recive", userStatus: false });
        }



    } catch (error) {
        console.error(error);
        res.status(500).render("Login/login");
    }
}

const logout = (req, res) => {
    if (req.cookies.user) {
        res.clearCookie("contact");
        res.clearCookie("user");
        res.clearCookie("crn");
        res.redirect("/home");
    } else {
        res.status(404).send("Not Found");
    }
}

const complaint = (req, res) => {
    console.log(req.body);
    console.log(req.cookies.user)
    res.send("complain submited")
}

const mailSender = (req, res) => {
    const projectRoot = path.join(__dirname, '..'); // Go up one level to the project root
    const imagePath = path.join(projectRoot, 'Assets', 'ComplaintArea', 'img-1.jpg');
    const credential = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "laptopsahil123@gmail.com",
            pass: "pooj bzai ulqz baen"
        }
    }

    const mail = {
        from: "laptopsahil123@gmail.com",
        to: "laptopsahil123@gmail.com",
        subject: "Testing bro",
        text: "hii i am testing mail ",
        attachments: [
            {
                filename: 'example.jpg', // Replace with your desired file name
                path: imagePath, // Replace with the actual path to your photo
                cid: 'unique_photo_id' // optional, used to include the image in the HTML body
            }
        ],// if i have to send attachment
    }

    nodeMailer.createTransport(credential).sendMail(mail, (error, info) => error ? console.log(error) : console.log("mail send successfully"));

    res.send("i mail sender")
}

module.exports = {
    login,
    logout,
    complaint,
    mailSender,//✅
}
