import { Service } from "../models/service.js";

function create(req,res){
  req.body.owner = req.user.profile
  Service.create(req.body)
  .then(service => {
    Service.findById(service._id)
    .populate('owner')
    .then(populatedService => {
      res.json(populatedService)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function index(req,res) {
  Service.find({})
  .populate('owner')
  .then(services => {
    res.json(services)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}


export {
  create,
  index,

}