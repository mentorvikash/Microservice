const Payment = require('../models/payment');

exports.processPayment = async (req, res, next) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        next(err);
    }
};

exports.getPaymentStatus = async (req, res, next) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ error: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        next(err);
    }
};
