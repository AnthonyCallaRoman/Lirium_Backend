const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, },
    descripcion: { type: String, required: true, },
    categoria
    cantidad_stock
    unidad_medida
    marca
    fecha_cadusidad
    ubicacion_almacen
    proveedor
    fecha_ingreso
    imagen: { type: String, required: true, },
    cantidad: { type: Number, required: true, },
    precio_compra: { type: Number, required: true },
    marca: { type: String, required: true, },
    
});

module.exports = mongoose.model('Producto', productoSchema);
