// -----------exercise 1------------
// console.log


// -----------exercise 2------------
// console.log("Hello World, I am in Node.")


// -----------exercise 3------------
// const http = require("http")
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// -----------exercise 4------------
// check version of npm you have by running "npm --version" in the terminal



// -----------exercise 5------------
var cowsay = require("cowsay");
console.log(cowsay.say({
    text: "Moooooooo" 
}));
