const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 'close' 이벤트가 발생하면 실행되는 콜백 함수
rl.on('close', function () {
    // 특수 문자열을 출력
    console.log(`!@#$%^&*(\\'"<>?:;`);
});
