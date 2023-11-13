// app.js

const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const route = require('./route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Route handler for home
app.get('/', route.handleHome);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
