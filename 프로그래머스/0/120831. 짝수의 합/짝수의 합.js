function solution(n) {
    var answer = 0;
    return Array(n).fill().map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c, 0);
}

// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }

// function solution(n) {
//     let answer = 0
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             answer += i            
//         }
//     }
//     return answer
// }