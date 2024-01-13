function solution(a, b) {
    // 숫자를 문자열로 변환하여 두 숫자를 연결
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);

    // 연결된 숫자를 비교하여 더 큰 값을 반환
    return ab > ba ? Number(ab) : Number(ba);
}
