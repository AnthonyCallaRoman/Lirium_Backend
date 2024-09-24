const UnidadMedidaService = require('../../services/producto/unidadMedidaService');

class UnidadMedidaController {
  async createUnidadMedida(req, res) {
    try {
      const unidadmedida = await UnidadMedidaService.createUnidadMedida(req.body);
      res.status(201).json(unidadmedida);    
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getUnidadMedida(req, res) {
    try{
      const unidadmedida = await UnidadMedidaService.getUnidadMedidaById(req.params.id);
      if (!unidadmedida) return res.status(404).json({ message: 'Product not found' });
      res.json(unidadmedida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
  }

  async getAllUnidadMedida(req, res) {
    try {
      const unidadmedida = await UnidadMedidaService.getAllUnidadMedida();
      res.json(unidadmedida);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUnidadMedida(req, res) {
    try {
      const unidadmedida = await UnidadMedidaService.updateUnidadMedida(req.params.id, req.body);
      if (!unidadmedida) return res.status(404).json({ message: 'UnidadMedida not found' });
      res.json(unidadmedida)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUnidadMedida(req, res) {
    try {
      const unidadmedida = await UnidadMedidaService.deleteUnidadMedida(req.params.id);
      if (!unidadmedida) return res.status(404).json({ message: 'UnidadMedida not found' });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UnidadMedidaController();