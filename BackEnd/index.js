/* npm i express mongoose cors dotenv nodemon*/

const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();

const port = process.env.USER_PORT;

/******************************/

const IncomeRouter = require('./routes/IncomeRouter')

const CategoryRouter = require('./routes/CategoryRouter')

const ExpenseRouter = require('./routes/ExpenseRouter')
/******************************/

const  app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(
    'mongodb://127.0.0.1:27017/mypocket',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{

    app.listen(port, ()=>{
       console.log(`MyPocketAPI Service up And running on ${port}`);
    });

}).catch((error)=>{
    console.log(error)
})

/******************************/

app.use('/IncomeRouter',IncomeRouter)

app.use('/CategoryRouter', CategoryRouter)

app.use('/ExpenseRouter', ExpenseRouter)