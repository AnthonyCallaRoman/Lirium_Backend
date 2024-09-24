const mongoose =require('mongoose');
const { Schema } = mongoose;

const categoriaSchema = new Schema({
    nombre:{ 
        type: String, 
        required: true, 
    },
    subcategoria: {
        type: Schema.Types.ObjectId, ref: 'SubCategoria'
    }

})

module.exports = mongoose.model('Categoria', categoriaSchema);