import express from 'express';
import {
	createPurchaseOrder,
	purchaseFailure,
	purchasePending,
	purchaseSuccess,
} from '../controllers/payment.controller';

const router = express.Router();

router.post('/', createPurchaseOrder);
router.get('/success', purchaseSuccess);
router.get('/pending', purchasePending);
router.get('/failure', purchaseFailure);
router.post('/webhook', purchaseFailure);

export default router;
