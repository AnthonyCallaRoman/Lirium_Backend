const Categoria = require("../../models/producto/categoria");

class CategoriaRepository {
  async create(userData) {
    const categoria = new Categoria(userData);
    return await categoria.save();
  }

  async findById(id) {
    return await Categoria.findById(id);
  }

  async findAll() {
    return await Categoria.find();
  }

  async update(id, userData) {
    return await Categoria.findByIdAndUpdate(id,userData, {new: true});
  }

  async delete(id) {
    return await Categoria.findByIdAndDelete(id);
  }
}

module.exports = new CategoriaRepository();