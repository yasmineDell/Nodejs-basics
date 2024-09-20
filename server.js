const http = require("http")
const fs = require("fs");


const server= http.createServer((req, res)=>{

    console.log(req.method);



    // setting header

    res.setHeader('Content-Type','text/html');
    
    let path='./views'

    switch (req.url)
    {

case '/' : path+= 'index.html'
break;

case '/about': path+= '/about.html'
break;
default : path+= '/404.html';
break;



    }

 // Read and serve the file
 fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
     
      res.end('<h1>Server Error</h1>');
    } else {
      
      res.end(data);
    }})


}

    
 )


server.listen(3000,'localhost',()=> {
    console.log("server running on port 3000");
})