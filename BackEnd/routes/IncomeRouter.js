const express = require('express');
const incomeController = require ('../controllers/IncomeController');

const router = express.Router();

router.post('/income',incomeController.saveIncome);

router.get('/income',incomeController.getAllIncome);


module.exports = router;