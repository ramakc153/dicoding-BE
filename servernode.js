const http = require('http');
    
const requestListener = (request, response) => {

    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    
    const {method, url} = request;

    if (url == '/'){
        if (method == 'GET'){
        
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : `This is ${url} page with ${method} method sir`
            }))
        } else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message : `There is no ${method} method in this ${url} sir`
        }))

        }
    }else if (url == '/about'){
            if (method == 'GET'){
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `This is ${url} page with ${method} method sir`
                }))
                
            } else if (method == 'POST'){
                response.statusCode = 200;
                let body = [];

                request.on('data', (chunk) =>{
                    body.push(chunk);
                })
                request.on('end',() =>{
                    body = Buffer.concat(body).toString();
                    const {name} = JSON.parse(body);
                    response.end(JSON.stringify({
                        message : `Hello ${name} u r in ${url} page using ${method} method`}))
                })
            } else{
                response.statusCode = 400;
                response.end(JSON.stringify({
                    message : `There is no ${method} method in this page sir`}))
            };
         } else{
            response.statusCode = 404;
            response.end(JSON.stringify({
                message : `Halaman ${url} tidak ditemukan`
            }))

    }
}

//     if (method == 'GET'){
//             response.end(`<h1>This is ${method} sir</h1>`)
//     };
//     if (method == 'POST'){
//         let body = [];

//         request.on('data', (chunk) =>{
//             body.push(chunk);

//         });
        
//         request.on('end',() =>{
//             body = Buffer.concat(body).toString();
//             const {name} = JSON.parse(body);
//             response.end(`<h1>Hai, my name is ${name}</h1>`)
//         })
//     }
// };
    
    
const server = http.createServer(requestListener);
    
const port = 5000;
const host = 'localhost';
    
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});