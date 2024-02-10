var http = require('http')

http.createServer(function(req,res){
     
    res.write("welcome back alien!!!")
    res.end()
}).listen(8001)