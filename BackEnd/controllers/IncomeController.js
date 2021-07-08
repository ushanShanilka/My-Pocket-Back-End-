const IncomeSchema = require ('../models/IncomeSchema');


const saveIncome = (req,res)=>{
    const income = new IncomeSchema({
        income:req.body.income,
        category:req.body.category,
        date:req.body.date,
    })
    income.save().then(saveResponse=>{
        res.status(200).json({message: 'Success',state:true})
    }).catch(saveResponseError=>{
        res.status(500).json({message:'internal Server Error',state:false,error:saveResponseError})
    })
}

const getAllIncome = async ( req , res ) => {
    try {
        const income = await IncomeSchema.find()
        console.log(income)
        res.status(200).json({message: "Onna" , state: true , data: income})
    } catch (error) {

    }
}

module.exports={
    saveIncome,
    getAllIncome
}