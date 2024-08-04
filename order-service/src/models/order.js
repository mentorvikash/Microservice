const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
