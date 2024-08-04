const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.addProduct);
router.get('/:id', inventoryController.getProduct);
router.put('/:id', inventoryController.updateProduct);

module.exports = router;
