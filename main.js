const http = require("node:http")
const fs = require("node:fs")
const port = 3000;
const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.end("This is Home Page")
    } else if(req.url==="/about"){
        res.end("This is About page")
    }else if(req.url==="/contact"){
        res.end("This is Contact page")
    }else if (req.url === "/file-write") {
        fs.writeFile("./demo.txt", "hello world", (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("data written successfully");
                res.end("Data written to the file.");
            }
        });
    }
})

server.listen(port,()=>{
    console.log(`listening on port 3000.`)
})

