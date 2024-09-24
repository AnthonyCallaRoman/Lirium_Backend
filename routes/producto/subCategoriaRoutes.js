const express = require('express');
const router = express.Router();
const SubCategoriaController = require('../../controllers/producto/subCategoriaController');

router.post('/createSubCategoria', SubCategoriaController.createSubCategoria);
router.get('/getAllSubCategoria', SubCategoriaController.getAllSubCategoria);
router.get('/getSubCategoria/:id', SubCategoriaController.getSubCategoria);
router.put('/updateSubCategoria/:id', SubCategoriaController.updateSubCategoria);
router.delete('/deleteSubCategoria/:id', SubCategoriaController.deleteSubCategoria);

module.exports = router;