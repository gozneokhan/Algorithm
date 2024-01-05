const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 사용자로부터 입력 받기
rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    // 입력된 문자열 가져오기
    const str = input[0];

    // 결과를 저장할 변수 초기화
    let result = '';

    // 문자열을 순회하면서 대소문자 변환
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase(); // 소문자를 대문자로 변환하여 결과에 추가
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase(); // 대문자를 소문자로 변환하여 결과에 추가
        } else {
            result += char; // 알파벳이 아닌 문자는 그대로 결과에 추가
        }
    }

    // 최종 결과 출력
    console.log(result);
});
