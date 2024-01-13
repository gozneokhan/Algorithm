function solution(a, b) {
    // 두 수를 연산한 결과
    const ab = Number(String(a) + String(b));
    // 2 * a * b의 결과
    const twiceProduct = 2 * a * b;

    // 비교하여 더 큰 값을 반환
    return ab > twiceProduct ? ab : twiceProduct;
}