import express from 'express';
import morgan from 'morgan';
import paymentRouter from './routes/payment.routes';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/purchase-order', paymentRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
