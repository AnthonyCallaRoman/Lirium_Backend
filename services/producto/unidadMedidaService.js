const UnidadMedidaRepository = require('../../repositories/producto/unidadMedidaRepository');

class UnidadMedidaService {
    async createUnidadMedida(userData) {
        return await UnidadMedidaRepository.create(userData);
      }
    
      async getUnidadMedidaById(id) {
        return await UnidadMedidaRepository.findById(id);
      }
    
      async getAllUnidadMedida() {
        return await UnidadMedidaRepository.findAll();
      }
    
      async updateUnidadMedida(id, userData) {
        return await UnidadMedidaRepository.update(id, userData);
      }
    
      async deleteUnidadMedida(id) {
        return await UnidadMedidaRepository.delete(id);
      }
}
module.exports = new UnidadMedidaService();