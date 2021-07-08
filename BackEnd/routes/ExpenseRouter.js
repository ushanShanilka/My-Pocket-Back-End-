const express = require ('express')
const expenseController = require('../controllers/ExpenseController');

const router = express.Router();

router.post('/expense', expenseController.saveExpense)

router.get('/expense',expenseController.getALlExpense)

module.exports = router