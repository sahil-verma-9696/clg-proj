const serveLogin = (req, res) => {

    if (req.cookies.user) {
        res.render("Login/login", { msg: "request not recive", userStatus: false, URL: process.env.URL })
    } else {
        res.render("Login/login", { msg: "request not recive", userStatus: false, URL: process.env.URL })
    }
}

const serveHome = (req, res) => {

    if (req.cookies.user) {
        res.render("Home/home", { userStatus: true, URL: process.env.URL })
    } else {
        res.render("Home/home", { userStatus: false , URL: process.env.URL })
    }
}

const serveCompForm_faculty = (req, res) => {
    res.render("ComplaintsForm/comp-faculty",{ URL: process.env.URL} )
} 

const serveCategories = (req, res) => {
    res.render("GrevCategories/categories",{ URL: process.env.URL })
}

const loginTest = (req,res)=>{
    res.render("Login/login",{ msg: "request not recive", userStatus: false, URL: process.env.URL }); 
}
module.exports = {
    serveLogin,
    serveHome,
    serveCompForm_faculty,
    serveCategories,
    loginTest
}