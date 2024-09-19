const productoService = require('../services/productoService');

class ProductoController {
  async createProducto(req, res) {
    try {
      const producto = await productoService.createProducto(req.body);
      res.status(201).json(producto);    
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getProducto(rew, res) {
    
  }
}