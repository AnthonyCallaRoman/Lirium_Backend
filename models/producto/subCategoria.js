const mongoose =require('mongoose');
const { Schema } = mongoose;

const subCategoriaSchema = new Schema({
    nombre: {
        type: String, 
        required: true,
    }

})

module.exports = mongoose.model('SubCategoria', subCategoriaSchema);