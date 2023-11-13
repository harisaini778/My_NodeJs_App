// route/admin

const express = require('express');
const router = express.Router();
const route = require('../route');


// Route handler for add-product
router.get('/add-product', route.handleAddProduct);

// Route handler for products (POST)
router.post('/products', route.handleProducts);



module.exports = router;
