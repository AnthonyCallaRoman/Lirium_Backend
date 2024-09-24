const Producto = require("../../models/producto/producto");

class ProductoRepository {
  async create(userData) {
    const producto = new Producto(userData);
    return await producto.save();
  }

  async findById(id) {
    return await Producto.findById(id);
  }

  async findAll() {
    return await Producto.find();
  }

  async update(id, userData) {
    return await Producto.findByIdAndUpdate(id,userData, {new: true});
  }

  async delete(id) {
    return await Producto.findByIdAndDelete(id);
  }
}

module.exports = new ProductoRepository();