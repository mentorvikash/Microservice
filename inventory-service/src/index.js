const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const inventoryRoutes = require('./routes/inventoryRoutes');

app.use(express.json());

app.use('/inventory', inventoryRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Inventory service running on port ${process.env.PORT}`)))
    .catch(err => console.error(err));
