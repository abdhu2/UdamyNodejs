const { brotliDecompressSync } = require("zlib");

const routeHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html><body>welcome</body></html>');
        res.write('<html><body><form action="/createuser" method="POST"><input type="text" name = "username"><button>submit</button></form></body></html>')
        return res.end();
    }

    if(url === '/createuser' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            //const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }

    


    if(url === '/users'){
        res.write('<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>');
        return res.end();
    }
}


module.exports = routeHandler;
