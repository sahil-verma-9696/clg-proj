const sessionChecker = (req, res, next) => {
    if (!req.session.user) {
        res.redirect("/dashboard")
    } else {
        next()
    }
}

module.exports = { sessionChecker }