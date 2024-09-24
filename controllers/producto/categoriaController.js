const CategoriaService = require('../../services/producto/categoriaService');

class CategoriaController {
  async createCategoria(req, res) {
    try {
      const categoria = await CategoriaService.createCategoria(req.body);
      res.status(201).json(categoria);    
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getCategoria(rew, res) {
    try{
      const categoria = await CategoriaService.getCategoriaById(req.params.id);
      if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
  }

  async getAllCategoria(rec, res) {
    try {
      const categoria = await CategoriaService.getAllCategoria();
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCategoria(req, res) {
    try {
      const categoria = await CategoriaService.updateCategoria(req.params.id, req.body);
      if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
      res.json(categoria)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteCategoria(req, res) {
    try {
      const categoria = await CategoriaService.deleteCategoria(req.params.id);
      if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CategoriaController();