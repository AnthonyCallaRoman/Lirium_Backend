const express = require('express');
const router = express.Router();
const CategoriaController = require('../../controllers/producto/categoriaController');

router.post('/createCategoria', CategoriaController.createCategoria);
router.get('/getAllCategoria', CategoriaController.getAllCategoria);
router.get('/getCategoria/:id', CategoriaController.getCategoria);
router.put('/updateCategoria/:id', CategoriaController.updateCategoria);
router.delete('/deleteCategoria/:id', CategoriaController.deleteCategoria);

module.exports = router;