const Order = require('../models/order');

exports.createOrder = async (req, res, next) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        next(err);
    }
};

exports.getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (err) {
        next(err);
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });
        res.json(updatedOrder);
    } catch (err) {
        next(err);
    }
};
