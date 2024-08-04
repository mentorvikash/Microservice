const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());

app.use('/payments', paymentRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Payment service running on port ${process.env.PORT}`)))
    .catch(err => console.error(err));
