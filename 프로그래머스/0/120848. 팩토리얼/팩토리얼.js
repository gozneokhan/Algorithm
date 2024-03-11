function solution(n) {
    let i = 1;
    let factorial = 1;
    while (factorial <= n) {
        i += 1,
        factorial *= i
    }
    return i -1;
}

// function solution(n) {
//     let k = 1;
//     for(let i =1; i<12; i++){
//         k *= i;
//         if(k>n){
//             return i - 1
//         }
//     }
// }

// function solution(n) {
//     for(let i = 1, v = 1; true; v *= ++i) if(v > n) return --i;
// }
