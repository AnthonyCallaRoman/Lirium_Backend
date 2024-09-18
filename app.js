const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const morgan = require('morgan')
dotenv.config();


const app = express();

app.use(morgan('combined'));

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
