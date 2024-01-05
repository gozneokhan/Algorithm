const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 사용자로부터 한 줄을 입력받아 배열 input에 저장
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 입력된 문자열을 숫자로 변환하여 변수 a, b에 저장
    const a = Number(input[0]);
    const b = Number(input[1]);

    // 덧셈 결과 계산
    const result = a + b;

    // 덧셈식 출력
    console.log(`${a} + ${b} = ${result}`);
});
