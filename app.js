const userRoutes = require('./routes/userRoutes');
const productoRoutes =require('./routes/producto/productoRoutes');
const CategoriaRoutes =require('./routes/producto/categoriaRoutes');
const SubCategoriaRoutes =require('./routes/producto/subCategoriaRoutes');
const UnidadMedidaRoutes =require('./routes/producto/unidadMedidaRoutes');

const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const morgan = require('morgan')
const cors = require('cors')
dotenv.config();

const app = express();

app.use(morgan('combined'));
app.use(cors());

connectDB();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/producto', productoRoutes);
app.use('/categoria', CategoriaRoutes);
app.use('/subCategoria', SubCategoriaRoutes);
app.use('/unidadMedida', UnidadMedidaRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
