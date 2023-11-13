const fs = require('fs');

function handleHome(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>');
    res.write('<h1>Welcome home</h1>');
    res.write('<form action="/products" method="POST">');
    res.write('<input type="text" name="title" placeholder="Enter title">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body></html>');
    return res.end();
}

function handleProducts(req, res) {
    res.setHeader('Content-Type', 'text/html');
    
    // Check if req.body is defined
    if (req.body && req.body.title) {
        res.write(`<html><body><h1>${req.body.title}</h1></body></html>`);
    } else {
        res.write('<html><body><h1>No title provided</h1></body></html>');
    }

    return res.end();
}

function handleAbout(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>Welcome to About Us page</body></html>');
    return res.end();
}

function handleNode(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>Welcome to my Node Js project</body></html>');
    return res.end();
}

function handleRoot(req, res) {
    if (req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } else {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form>'
        );

        // Reading the file...
        const message = fs.readFileSync('message.txt', 'utf8');
        res.write(`<p>Message from file: ${message}</p>`);
        res.write('</body></html>');
        return res.end();
    }
}

function handleAddProduct(req, res) {
    res.send('<h1>Add Products in Express!</h1>');
}

module.exports = {
    handleHome,
    handleAbout,
    handleNode,
    handleRoot,
    handleAddProduct,
    handleProducts,
};
