var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({
  name: String,
  regions: [{type: Schema.Types.ObjectId, ref:'Region'}]
});

var RegionSchema = new Schema({
  name: String,
  country: {type: Schema.Types.ObjectId, ref:'Country'}
});

// var LotSchema = new Schema({
//   name: String,
//   lots: [{type: Schema.Types.ObjectId, ref:'Region'}]
// });


 module.exports = {
   country: mongoose.model('Country', CountrySchema),
   region: mongoose.model('Region', RegionSchema)
 }
// var Lot = module.exports = mongoose.model('Lot', LotSchema)
