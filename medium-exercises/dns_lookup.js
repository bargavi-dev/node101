const dns = require('dns');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
  readline.question('Give a domain name.', name => {
    dns.lookup(name, function (err, addresses, family) {
        console.log(addresses);
    console.log(err)});
    readline.close();
  });