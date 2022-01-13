const http = require('http');
const casual = require('casual');
const port = 8080;

var sentence = casual.country;

const server = http.createServer((request, response) => 
{
    response.end(sentence);
});

server.listen(port, () =>
{
    console.log("Server running at port: " + port)
});