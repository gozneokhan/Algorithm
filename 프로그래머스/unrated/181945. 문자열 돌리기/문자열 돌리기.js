const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];

    // 문자열을 90도 돌리기 위해 배열로 변환
    const rows = str.length;
    const cols = 1;

    // 2차원 배열 초기화
    const rotatedMatrix = Array.from({ length: rows }, () => Array(cols).fill(''));

    // 문자열을 배열에 채우기
    for (let i = 0; i < rows; i++) {
        rotatedMatrix[i][0] = str[i];
    }

    // 결과 출력
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            process.stdout.write(rotatedMatrix[j][i] + '\n');
        }
    }
});
