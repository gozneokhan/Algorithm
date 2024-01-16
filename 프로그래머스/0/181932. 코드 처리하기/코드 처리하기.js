function solution(code) {
    var answer = '';
    var mode = 0; // 초기 mode는 0
    for (var i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] !== "1") {
                if (i % 2 === 0) {
                    answer += code[i];
                }
            } else {
                mode = 1; // mode를 0에서 1로 바꿈
            }
        } else {
            if (code[i] !== "1") {
                if (i % 2 !== 0) {
                    answer += code[i];
                }
            } else {
                mode = 0; // mode를 1에서 0으로 바꿈
            }
        }
    }

    // 만약 ret이 빈 문자열이라면 "EMPTY"를 반환
    return answer === '' ? "EMPTY" : answer;
}