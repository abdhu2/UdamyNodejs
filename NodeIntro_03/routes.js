const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.write('<html><body><form action="/message" method = "POST"><input type="text" name="message"><button>send</button></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        const body =[];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                // res.statusCode = 302;
                // res.setHeader('Location', '/');
                // return res.end();
            });
        });

        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><body><h1>Hello from node.js server!!!</h1></body></html>');
    res.end();
};

//module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText : "Hello welcome"
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Hello welcome";

exports.handler = requestHandler;
exports.someText = "welcome ";