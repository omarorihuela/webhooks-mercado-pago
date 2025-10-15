import express from 'express';
import paymentRouter from './routes/payment.routes';

const api = express();

const PORT = process.env.PORT ?? 3000;

api.use(express.json());
api.use(express.urlencoded());

api.use('/', paymentRouter);

api.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
