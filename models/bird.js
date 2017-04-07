var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var Schema = mongoose.Schema;
/* Represents a bird species */
var birdSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    averageEggsLaid: {type: Number, min: 1, max: 50 },
    threatened: { type: Boolean, default: false },
    dateSeen:[ { type: Date, default: Date.now, validate: {
        validator : function(date) {
            //return false if date is in the future
            return (date.getTime() < Date.now()) ;
        }, message: '{VALUE} is not a valid sighting date. Date must be in the past'
     }}],
    nest: {location: String, materials: String }
});
var Bird = mongoose.model('Bird', birdSchema);
birdSchema.plugin(uniqueValidator);
module.exports = Bird;
