const CategoriaRepository = require('../../repositories/producto/categoriaRepository');

class CategoriaService {
    async createCategoria(userData) {
        return await CategoriaRepository.create(userData);
      }
    
      async getCategoriaById(id) {
        return await CategoriaRepository.findById(id);
      }
    
      async getAllCategoria() {
        return await CategoriaRepository.findAll();
      }
    
      async updateCategoria(id, userData) {
        return await CategoriaRepository.update(id, userData);
      }
    
      async deleteCategoria(id) {
        return await CategoriaRepository.delete(id);
      }
}
module.exports = new CategoriaService();