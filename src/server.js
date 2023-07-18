const Hapi = require('@hapi/hapi');
     
     
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();


/*all code under this line is using basic hapi */

// const Hapi = require('@hapi/hapi');
// const routes = require('./routes')
     
// const init = async () => {
//     const server = Hapi.server({
//         port: 5000,
//         host: 'localhost',
//     });

//     server.route(routes)
 
//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };
 
// init();