function solution(a, b, c) {
    // 세 숫자가 모두 다르다면 a + b + c 점을 얻음
    if (a !== b && b !== c && c !== a) {
        return a + b + c;
    }
    // 두 숫자는 같고 나머지 하나는 다르다면 (a + b + c) × (a^2 + b^2 + c^2) 점을 얻음
    else if ((a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b)) {
        return (a + b + c) * (a**2 + b**2 + c**2);
    }
    // 세 숫자가 모두 같다면 (a + b + c) × (a^2 + b^2 + c^2) × (a^3 + b^3 + c^3) 점을 얻음
    else {
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    }
}