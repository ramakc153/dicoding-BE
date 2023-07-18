const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) =>{
            return `this is ${request.path} page using ${request.method} sir`
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request, h) =>{
            return `there is no ${request.method} in ${request.path} page sir`
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) =>{
            return `this is ${request.path} page sir`
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) =>{
            return `there is no ${request.method} in ${request.path} page sir`
        }
    },
    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request, h) =>{
            const {name = 'strainger'} = request.params
            return `hello, ${name}. welcome to hello page`
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) =>{
            return `there is no such ${request.path} page sir`
        }
    },
]

module.exports = routes