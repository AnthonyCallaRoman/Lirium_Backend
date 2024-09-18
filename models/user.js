const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    precio_compra: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);