const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/createProducto', productoController.createProducto);
router.get('/getAllProducto', productoController.getAllProducto);
router.get('/getProducto/:id', productoController.getProducto);
router.put('/updateProducto/:id', productoController.updateProducto);
router.delete('/deleteProducto/:id', productoController.deleteProducto);

module.exports = router;