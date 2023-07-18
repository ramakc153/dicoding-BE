const routes = [
    {
        method : 'GET',
        route : '/notes',
        method : () =>{

        }
    }
]
module.exports = routes;















/*code under this line using using basic HAPI*/

// const routes = [
//     {
//         method : 'GET',
//         path : '/',
//         handler : (request, h) =>{
//             return `this is ${request.path} page using ${request.method} sir`
//         }
//     },
//     {
//         method : '*',
//         path : '/',
//         handler : (request, h) =>{
//             return `there is no ${request.method} in ${request.path} page sir`
//         }
//     },
//     {
//         method : 'GET',
//         path : '/about',
//         handler : (request, h) =>{
//             return `this is ${request.path} page sir`
//         }
//     },
//     {
//         method : '*',
//         path : '/about',
//         handler : (request, h) =>{
//             return `there is no ${request.method} in ${request.path} page sir`
//         }
//     },
//     {
//         method : 'GET',
//         path : '/hello/{name?}',
//         handler : (request, h) =>{
//             const {name = 'strainger'} = request.params
//             const {lang} = request.query

//             if (lang == 'id'){
//                 return `Halo, ${name}. selamat datang di hello page`
//             } else {
//                 return `Nihao ${name}. Bing CHilling`
//             }
            
//         }
//     },
//     {
//         method :'GET',
//         path : '/user',
//         handler : (request,h) =>{
//             return h.response('created').code(201);

//         }

//     },
//     {
//         method : '*',
//         path : '/{any*}',
//         handler : (request, h) =>{
//             return `there is no such ${request.path} page sir`
//         }
//     },
// ]

// module.exports = routes