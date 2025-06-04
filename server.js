// the client and the server.
// When we browse a website, we use devices that are known as clients. These clients send requests to servers, which are computers that store and serve the website's files. The server processes the request and sends back the requested files to the client, which then displays them in the browser. This process is known as the client-server model, where the client requests resources from the server, and the server responds with those resources.

//how then do they communicate...
//Protocols...

//protocols are a set of rules that define how data is transmitted over a network. They ensure that the data is sent and received correctly, and they help to establish a connection between the client and the server. Some common protocols include HTTP, HTTPS, FTP, and SMTP.
// BASICALLY a protocol is a set of rules that define how the server and client communicate with each other.  

//so when data is sent from a client to a server, the information is sent through a socket via a protocol called tcp. TCP breakes the data into smaller bits called packets which are then sent over the network. 

// now we use node to create a server and tell node what information to sent to clients when they make a request to the server. We can use the `http` module in Node.js to create a server that listens for incoming requests and sends back responses.

//Port
//a port is a communication endpoint. when we send a request to a server, the port alows the server to know what to waht exact application is the request being made to. Each application on a server listens on a specific port, and the client must specify the port number in the request. For example, HTTP requests are typically made to port 80, while HTTPS requests are made to port 443.
// all programms running on a computer have a unique port number that allows them to communicate with each other. When a client sends a request to a server, it specifies the port number in the request, and the server listens on that port for incoming requests. If the server is not listening on that port, the request will not be processed.

// creating a server:
// we use the `http` module in Node.js to create a server. The `http` module provides a way to create an HTTP server that can listen for incoming requests and send back responses. We can use the `createServer` method to create a server, and we can specify a callback function that will be called whenever a request is received by the server.

let http = require('http');

let server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');     
}
)

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
