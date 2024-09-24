const express = require('express');
const router = express.Router();
const UnidadMedidaController = require('../../controllers/producto/unidadMedidaController');

router.post('/createUnidadMedida', UnidadMedidaController.createUnidadMedida);
router.get('/getAllUnidadMedida', UnidadMedidaController.getAllUnidadMedida);
router.get('/getUnidadMedida/:id', UnidadMedidaController.getUnidadMedida);
router.put('/updateUnidadMedida/:id', UnidadMedidaController.updateUnidadMedida);
router.delete('/deleteUnidadMedida/:id', UnidadMedidaController.deleteUnidadMedida);

module.exports = router;