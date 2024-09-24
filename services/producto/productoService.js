const ProductoRepository = require('../../repositories/producto/productoRepository');

class ProductoService {
    async createProducto(userData) {
        return await ProductoRepository.create(userData);
      }
    
      async getProductoById(id) {
        return await ProductoRepository.findById(id);
      }
    
      async getAllProducto() {
        return await ProductoRepository.findAll();
      }
    
      async updateProducto(id, userData) {
        return await ProductoRepository.update(id, userData);
      }
    
      async deleteProducto(id) {
        return await ProductoRepository.delete(id);
      }
}
module.exports = new ProductoService();