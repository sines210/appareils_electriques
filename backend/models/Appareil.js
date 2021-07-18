const mongoose = require('mongoose');

const appareilSchema = mongoose.Schema([{
    id: {type:Number},
    name: {type:String, required:true},
    status: {type: String, required:true}
}])

module.exports = mongoose.model('Appareil', appareilSchema);