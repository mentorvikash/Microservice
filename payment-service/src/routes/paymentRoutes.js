const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/', paymentController.processPayment);
router.get('/:id', paymentController.getPaymentStatus);

module.exports = router;
