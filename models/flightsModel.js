
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightsSchema = new Schema({
   airline: { type: String, enum: ['American', 'Southwest', 'United'] },
   flightNo: { type: Number },
   departs: { type: Date, required: true },
})

const Flight = mongoose.model('flights', flightsSchema)

module.exports = Flight