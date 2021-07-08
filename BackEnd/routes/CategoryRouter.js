const express = require ('express')
const categoryController = require('../controllers/CategoryController');

const router = express.Router();

 router.post('/category', categoryController.saveCategory)

router.get('/categorys', categoryController.getAllCategory)

router.delete('/category' ,categoryController.deleteCategoryByName)

module.exports = router;