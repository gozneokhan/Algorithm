function solution(n) {
    let answer = 0;
    for (let _ = 0; _ < n; _++) {
        answer += 1
        while (answer % 3 == 0 || answer.toString().split('').includes('3')) {
            answer += 1
    }
  }
    return answer;
}

// function solution(n) {
//     let arr = [];
//     for (let i = 0; i < 1000; i++) {
//         if (i % 3 != 0 && !i.toString().split('').includes('3')) {
//             arr.push(i)
//         }
//     }
//     return arr[n-1];
// }