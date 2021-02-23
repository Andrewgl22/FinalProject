const Dev = require('../model/user.model');

module.exports.getAll = (req,res) => {
    Dev.find()
    .then((req)=>res.json(req))
    .catch((err)=>console.log(err))
}

module.exports.getOne = (req,res) => {
    Dev.findById({_id:req.params.id})
    .then((req)=>res.json(req))
    .catch((err)=>console.log(err))
}

module.exports.addDev = (req,res) => {
    Dev.create(req.body)
    .then((req)=>res.json(req))
    .catch((err)=>console.log(err))
}

module.exports.deleteDev = (req,res) => {
    Dev.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}