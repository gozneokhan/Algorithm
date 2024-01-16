function solution(n) {
    var answer = 0;

    if (n % 2 === 1) { // n이 홀수인 경우
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    } else { // n이 짝수인 경우
        for (let i = 2; i <= n; i += 2) {
            answer += i * i;
        }
    }

    return answer;
}