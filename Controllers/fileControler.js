const serveLogin = (req, res) => {

    if (req.cookies.user) {
        res.render("Login/login",{ msg: "User already exist", userStatus: true })
    } else {
        res.render("Login/login",{ msg: "Please enter details", userStatus: false })
    } 
}

const serveHome = (req, res) => {

    if (req.cookies.user) {
        res.render("Home/home",{userStatus:true})
    } else {
        res.render("Home/home",{userStatus:false})
    }
}

const serveCompForm_faculty = (req, res) => {
    res.render("ComplaintsForm/comp-faculty")
}

const serveCategories = (req, res) => {
    res.render("GrevCategories/categories")
}

module.exports = {
    serveLogin,
    serveHome,
    serveCompForm_faculty,
    serveCategories,
}