const SubCategoriaRepository = require('../../repositories/producto/subCategoriaRepository');

class SubCategoriaService {
    async createSubCategoria(userData) {
        return await SubCategoriaRepository.create(userData);
      }
    
      async getSubCategoriaById(id) {
        return await SubCategoriaRepository.findById(id);
      }
    
      async getAllSubCategoria() {
        return await SubCategoriaRepository.findAll();
      }
    
      async updateSubCategoria(id, userData) {
        return await SubCategoriaRepository.update(id, userData);
      }
    
      async deleteSubCategoria(id) {
        return await SubCategoriaRepository.delete(id);
      }
}
module.exports = new SubCategoriaService();