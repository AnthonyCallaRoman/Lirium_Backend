const SubCategoria = require("../../models/producto/subCategoria");

class SubCategoriaRepository {
  async create(userData) {
    const subcategoria = new SubCategoria(userData);
    return await subcategoria.save();
  }

  async findById(id) {
    return await SubCategoria.findById(id);
  }

  async findAll() {
    return await SubCategoria.find();
  }

  async update(id, userData) {
    return await SubCategoria.findByIdAndUpdate(id,userData, {new: true});
  }

  async delete(id) {
    return await SubCategoria.findByIdAndDelete(id);
  }
}

module.exports = new SubCategoriaRepository();