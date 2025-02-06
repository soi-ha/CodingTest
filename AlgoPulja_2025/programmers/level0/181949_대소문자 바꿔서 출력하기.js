const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let result = ''
    
    for (s of str) {
        if (s === s.toUpperCase()) {
            result += s.toLowerCase()
        }
        else {
            result += s.toUpperCase()
        }
    }
    
    console.log(result)
});