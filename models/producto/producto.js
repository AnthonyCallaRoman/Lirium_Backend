const { required } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const productoSchema = new Schema({
    nombre: { 
        type: String, 
        required: true,
    },
    descripcion: { 
        type: String, 
        required: true, 
    },
    categoria: { 
        type: Schema.Types.ObjectId, 
        ref: 'Categoria',
        required: true
    },
    contenido: { 
        type: Number, 
        required: true, 
    },
    unidad_medida: { 
        type: Schema.Types.ObjectId, ref: 'UnidadMendida' 
    },
    marca: { 
        type: String, 
        required: true, 
    },
    fecha_cadusidad: { 
        type: Date, 
        required: true, 
    },
    ubicacion_almacen: { 
        type: String, 
        required: true, 
    },
    proveedor: { 
        type: String, 
        required: true, 
    },
    fecha_ingreso: { 
        type: Date, 
        required: true, 
    },
    imagen: {
        type: String, 
        required: true,
    },

});

module.exports = mongoose.model('Producto', productoSchema);
