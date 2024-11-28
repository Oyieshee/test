const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url==="/" && req.method === "GET"){
        res.write("Hello World");
        res.end();
    } else if (req.url === "/date" && req.method ==="GET") {
        res.write(new Date().toString());
        res.end();
    }else {
        res.write("NOt Found");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    });