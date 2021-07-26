const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let schema = new Schema({
    name: {
        type: String,
        require: true,
        index: true
    },
    pan: {
        type: String,
        require: true
    },
    empId: {
        type: String,
        require: true
    },
    amtRequested: {
        type: Number,
        require: true
    },
    noOfEmis: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('LeadCollection', schema)