const SubCategoriaService = require('../../services/producto/subCategoriaService');

class SubCategoriaController {
  async createSubCategoria(req, res) {
    try {
      const subcategoria = await SubCategoriaService.createSubCategoria(req.body);
      res.status(201).json(subcategoria);    
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getSubCategoria(req, res) {
    try{
      const subcategoria = await SubCategoriaService.getSubCategoriaById(req.params.id);
      if (!subcategoria) return res.status(404).json({ message: 'SubCategoria not found' });
      res.json(subcategoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
  }

  async getAllSubCategoria(req, res) {
    try {
      const subcategoria = await SubCategoriaService.getAllSubCategoria();
      res.json(subcategoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateSubCategoria(req, res) {
    try {
      const subcategoria = await SubCategoriaService.updateSubCategoria(req.params.id, req.body);
      if (!subcategoria) return res.status(404).json({ message: 'SubCategoria not found' });
      res.json(subcategoria)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteSubCategoria(req, res) {
    try {
      const subcategoria = await SubCategoriaService.deleteSubCategoria(req.params.id);
      if (!subcategoria) return res.status(404).json({ message: 'SubCategoria not found' });
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new SubCategoriaController();