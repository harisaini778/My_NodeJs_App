// const http = require('http');

// const server = http.createServer(function rqListener(req, res) {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body>Hello From Server!</body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000);

const http = require('http');

const server = http.createServer(function rqListener(req, res) {
    const url = req.url;
    
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>Welcome home</body></html>');
        return res.end();
    }

    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>Welcome to About Us page</body></html>');
        return res.end();
    }

    if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>Welcome to my Node Js project</body></html>');
        return res.end();
    }

    // Handle other URLs
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>Page not found</body></html>');
    res.end();
});

server.listen(4000);

