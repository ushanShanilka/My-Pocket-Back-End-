const mongoose = require('mongoose')
const IncomeSchema = new mongoose.Schema({
    income:{
        type: Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Income' , IncomeSchema)