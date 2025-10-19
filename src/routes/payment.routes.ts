import express from 'express';
import { createPurchaseOrder } from '../controllers/payment.controller';

const router = express.Router();

router.get('/purchase-order', createPurchaseOrder);

export default router;
