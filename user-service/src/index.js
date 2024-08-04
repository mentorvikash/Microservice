const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`User service running on port ${process.env.PORT}`)))
    .catch(err => console.error(err));
