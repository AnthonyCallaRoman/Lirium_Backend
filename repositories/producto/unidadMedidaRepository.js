const UnidadMedida = require("../../models/producto/unidadMedida");

class UnidadMedidaRepository {
  async create(userData) {
    const unidadmedida = new UnidadMedida(userData);
    return await unidadmedida.save();
  }

  async findById(id) {
    return await UnidadMedida.findById(id);
  }

  async findAll() {
    return await UnidadMedida.find();
  }

  async update(id, userData) {
    return await UnidadMedida.findByIdAndUpdate(id,userData, {new: true});
  }

  async delete(id) {
    return await UnidadMedida.findByIdAndDelete(id);
  }
}

module.exports = new UnidadMedidaRepository();