import mongoose from "mongoose";

const Schema = mongoose.Schema

const serviceSchema = new Schema({
  name: {type: String, required: true},
  timeHrs: Number,
  timeMins: Number,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Service = mongoose.model('Service', serviceSchema)

export {
  Service
}