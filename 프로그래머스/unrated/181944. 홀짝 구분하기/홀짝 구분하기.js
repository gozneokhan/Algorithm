const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // 입력값을 공백을 기준으로 분리하여 배열로 저장
    input = line.split(' ');
}).on('close', function () {
    // 배열의 첫 번째 원소를 정수로 변환
    const n = Number(input[0]);

    // 주어진 조건에 따라 결과 출력
    if (n % 2 === 0) {
        console.log(`${n} is even`); // 짝수일 경우
    } else {
        console.log(`${n} is odd`);  // 홀수일 경우
    }
});
