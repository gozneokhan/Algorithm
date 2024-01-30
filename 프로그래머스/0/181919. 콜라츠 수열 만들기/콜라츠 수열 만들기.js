function solution(n) {
    var answer = [n]; // 초기값인 n을 먼저 배열에 추가

    while (n !== 1) {
        if (n % 2 === 0) {
            // 현재 값이 짝수일 때
            n /= 2;
        } else {
            // 현재 값이 홀수일 때
            n = 3 * n + 1;
        }
        answer.push(n); // 현재 값을 배열에 추가
    }

    return answer;
}