import express from 'express';
import paymentRouter from './routes/payment.routes';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', paymentRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
