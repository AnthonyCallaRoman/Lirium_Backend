const mongoose =require('mongoose');
const { Schema } = mongoose;

const unidadMendidaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    simbolo: {
        type: String,
        reguired: true
    }

})

module.exports = mongoose.model('UnidadMendida', unidadMendidaSchema);