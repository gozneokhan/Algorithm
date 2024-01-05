// readline 모듈을 사용하여 표준 입력(stdin)에서 데이터를 읽고 출력(stdout)에 쓰기 위한 인터페이스 생성
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력된 데이터를 저장할 배열 초기화
let input = [];

// 한 줄씩 입력을 받아 배열로 저장
rl.on('line', function (line) {
    input = line.split(' '); // 공백을 기준으로 문자열을 분리하여 배열로 저장
}).on('close', function () {
    // 배열에서 필요한 데이터 추출
    const str = input[0]; // 문자열
    const n = Number(input[1]); // 반복 횟수

    // 문자열을 n번 반복하여 새로운 문자열 생성
    const repeatedString = str.repeat(n);

    // 반복된 문자열을 출력
    console.log(repeatedString);
});