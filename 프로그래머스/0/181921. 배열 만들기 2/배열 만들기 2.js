function solution(l, r) {
    var answer = [];

    for (var i = l; i <= r; i++) {
        // 숫자를 문자열로 변환하여 "0"과 "5"로만 이루어져 있는지 확인
        if (/^[05]+$/.test(String(i))) {
            answer.push(i);
        }
    }

    // 만약 해당 조건을 만족하는 수가 없으면 -1이 담긴 배열을 반환
    if (answer.length === 0) {
        answer.push(-1);
    }

    return answer;
}