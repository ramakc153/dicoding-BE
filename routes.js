const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) =>{
            return `this is homepage sir`
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request, h) =>{
            return `there is no other method in homepage sir`
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) =>{
            return `this is about page sir`
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) =>{
            return `there is no other method in about page sir`
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) =>{
            return `there is no such  page sir`
        }
    },
]

module.exports = routes