function solution(n, k) {
    var answer = 0;
    if (n >= 10) {
        k -= ~~(n/10)
    }
    return 12000 * n + 2000 * k;
}