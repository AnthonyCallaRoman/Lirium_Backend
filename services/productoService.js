const productoRepository = require('../repositories/productoRepository');

class ProductoService {
    async createProducto(userData) {
        return await productoRepository.create(userData);
      }
    
      async getUserById(id) {
        return await productoRepository.findById(id);
      }
    
      async getAllUsers() {
        return await productoRepository.findAll();
      }
    
      async updateUser(id, userData) {
        return await productoRepository.update(id, userData);
      }
    
      async deleteUser(id) {
        return await productoRepository.delete(id);
      }
}
module.exports = new ProductoService();