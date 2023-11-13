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
const fs = require('fs');


const server = http.createServer(function rqListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></body>');
        res.write('</html>');

     // Reading the file......

        const message = fs.readFileSync('message.txt', 'utf8');
        res.write(`<p>Message from file: ${message}</p>`);
        res.write('</body></html>');

        
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk); 
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFileSync('message.txt',message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    
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

