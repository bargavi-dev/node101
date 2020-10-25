const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Give a file name:', function (filename) {
      readline.close();
    fs.readFile(filename, function (error, address) {
        if(error) {
            console.log(error.message);
            return;
        }
        

        else {
            
            console.log(address.toString());
        }
        });
    });
