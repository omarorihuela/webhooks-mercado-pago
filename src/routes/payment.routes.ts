import express from 'express';

const router = express.Router();

router.get('/create-order', (req, res) => res.send('Creating payment order!'));

export default router;
