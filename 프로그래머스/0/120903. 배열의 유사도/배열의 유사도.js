function solution(s1, s2) {
   return s1.length + s2.length - new Set([...s1, ...s2]).size
}

// function solution(s1, s2) {
//     var answer = 0;
//     return s1.filter(v => s2.includes(v)).length;
// }

// function solution(s1, s2) {
//     var answer = 0;
    
//     for (var i = 0; i < s1.length; i++) {
//         // 현재 s1 요소가 s2 배열에도 존재하는지 확인
//         if (s2.includes(s1[i])) {
//             answer++;
//         }
//     }
//     return answer;
// }