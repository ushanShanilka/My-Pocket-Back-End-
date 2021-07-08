const ExpenseSchema = require ('../models/ExpenseShema');


const saveExpense = (req,res)=>{
    const expense = new ExpenseSchema({
        details:req.body.details,
        category:req.body.category,
        price:req.body.price,
    })
    expense.save().then(saveResponse=>{
        res.status(200).json({message: 'Success',state:true})
    }).catch(saveResponseError=>{
        res.status(500).json({message:'internal Server Error',state:false,error:saveResponseError})
    })
}

const getALlExpense = async (req,res)=>{
    try {
        const expense = await ExpenseSchema.find()
        console.log(expense)
        res.status(200).json({message: "Done" , state: true , data: expense})
    } catch (error) {

    }
}

module.exports={
    saveExpense,
    getALlExpense
}