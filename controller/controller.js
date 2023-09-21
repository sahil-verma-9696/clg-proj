const register = (req,res)=>{
    const data = {
        name :"sahil",
        age:12
    }

    res.json(data);
}

module.exports = {
    register
}