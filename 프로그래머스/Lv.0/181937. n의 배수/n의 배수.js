function solution(num, n) {
    // num이 n의 배수인지 확인
    if (num % n === 0) {
        return 1; // 배수이면 1을 반환
    } else {
        return 0; // 배수가 아니면 0을 반환
    }
}