function solution(A, B) {
    return (B + B).indexOf(A);
}

// let solution=(a,b)=>(b+b).indexOf(a)

// function solution(A, B) {
//     if (A===B) return 0;
//     for (let i = 0; i < A.length; i++) {
//         A = A.slice(-1) + A.slice(0,-1);
//         if (A === B) return i+1;
//     }
//     return -1;
// }

// function solution(A, B) {
//   const pushRight = str => [str[str.length - 1], ...str.slice(0, str.length - 1)].join('');
//   for (let i = 0; i <= A.length; i++) {
//     if (A === B) return i;
//     A = pushRight(A);
//   }

//   return -1;
// }