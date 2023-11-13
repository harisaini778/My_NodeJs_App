// route/shop

const express = require('express');
const router = express.Router();
const route = require('../route');



// Route handler for about
router.get('/about', route.handleAbout);

// Route handler for node
router.get('/node', route.handleNode);

module.exports = router;
