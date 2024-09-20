const productoRepository = require('../repositories/productoRepository');

class ProductoService {
    async createProducto(userData) {
        return await productoRepository.create(userData);
      }
    
      async getProductoById(id) {
        return await productoRepository.findById(id);
      }
    
      async getAllProducto() {
        return await productoRepository.findAll();
      }
    
      async updateProducto(id, userData) {
        return await productoRepository.update(id, userData);
      }
    
      async deleteProducto(id) {
        return await productoRepository.delete(id);
      }
}
module.exports = new ProductoService();