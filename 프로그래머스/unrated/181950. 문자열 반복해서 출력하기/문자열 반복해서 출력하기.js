const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    // repeat 메서드를 사용하여 문자열을 n번 반복해서 출력
    const String = str.repeat(n);
    console.log(String);
});
