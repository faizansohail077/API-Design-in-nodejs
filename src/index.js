const http = require('http')

const server = http.createServer(async (req, res) => {

    if(req.method === 'GET'&& req.url ==='/'){
        // res.statusCode(200)
        res.end()
    }

})

server.listen(301,()=>{
    console.log('server on local host 3001')
})