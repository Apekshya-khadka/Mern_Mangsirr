import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  'mongodb+srv://apekshya:apekshya007@cluster0.9wlpd1g.mongodb.net/Shooping').then((val) => {
     
  app.listen(5000, () => {
    console.log('Database Connected and Server is running on port 5000');
  });
}).catch((err) => {
  console.log(err);
});



app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome' });
});

app.use('/api/products',productRoutes);


