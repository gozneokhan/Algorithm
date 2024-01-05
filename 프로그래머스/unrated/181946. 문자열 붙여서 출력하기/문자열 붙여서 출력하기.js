const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 입력을 받는 이벤트 핸들러
rl.on('line', function (line) {
    // 공백으로 분리하여 배열에 저장
    input = line.split(' ');
}).on('close', function () {
    // 배열에서 각각의 문자열을 가져옴
    const str1 = input[0];
    const str2 = input[1];

    // 두 문자열을 이어서 결과 생성
    const result = str1 + str2;

    // 결과 출력
    console.log(result);
});
