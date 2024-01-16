function solution(a, b, flag) {
    var result = 0;
    if (flag) {
        result = a + b;
    } else {
        result = a - b;
    }
    return result;
}
