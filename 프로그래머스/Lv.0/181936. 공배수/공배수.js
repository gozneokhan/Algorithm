function solution(number, n, m) {
    // number가 n과 m의 배수인지 확인
    if (number % n === 0 && number % m === 0) {
        return 1; // 배수이면 1을 반환
    } else {
        return 0; // 배수가 아니면 0을 반환
    }
}