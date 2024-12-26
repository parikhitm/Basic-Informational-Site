const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    let filePath = '';
    
    // Map URLs to HTML files
    switch(req.url) {
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about.html';
            break;
        case '/contact-me':
            filePath = 'contact-me.html';
            break;
        default:
            filePath = '404.html';
    }

    // Read and serve the HTML file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile('404.html', (err, content) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(content);
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});