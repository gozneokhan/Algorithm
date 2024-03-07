function solution(age) {
    let chr = 'abcdefghij'
   return Array.from(age.toString()).map(v => chr[v]).join('')
}

// function solution(age) {
//     let chr = 'abcdefghij'
//    return Array.from(String(age)).map(v => chr[v]).join('')
// }

// function solution(age) {
//     var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//     var answer = "";
//     age = age.toString();

//     for(let i=0; i<age.length; i++){
//         answer += alphabet[age[i]];
//     }
//     return answer;
// }

// function solution(age) {
//   return age.toString().replace(/./g, (x) => "abcdefghij"[x]);
// }