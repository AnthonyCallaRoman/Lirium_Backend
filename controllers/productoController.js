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
    try{
      const producto = await productoService.getProductoById(req.params.id);
      if (!producto) return res.status(404).json({ message: 'Product not found' });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
  }

  async getAllProducto(rec, res) {
    try {
      const producto = await productoService.getAllProducto();
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProducto(req, res) {
    try {
      const producto = await productoService.updateProducto(req.params.id, req.body);
      if (!producto) return res.status(404).json({ message: 'Producto not found' });
      res.json(producto)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteProducto(req, res) {
    try {
      const producto = await productoService.deleteProducto(req.params.id);
      if (!producto) return res.status(404).json({ message: 'Producto not found' });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductoController();