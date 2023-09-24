const registration = async (req,res)=>{
    console.log(req.body);
    res.json(req?.body)
}

module.exports = {
    registration
}