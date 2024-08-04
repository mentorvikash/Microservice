const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    userId: { type: String, required: true },
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    transactionId: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
