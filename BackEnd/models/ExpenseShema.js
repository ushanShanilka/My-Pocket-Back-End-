const mongoose = require('mongoose')
const ExpenseSchema = new mongoose.Schema({
    details : {
        type : String,
        required:true,
    },
    category : {
        type : String,
        required:true
    },
    price : {
        type : Number,
        required:true
    }
});

module.exports = mongoose.model('Expense' , ExpenseSchema)