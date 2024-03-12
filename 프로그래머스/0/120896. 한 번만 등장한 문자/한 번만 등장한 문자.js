function solution(s) {
   return [...s].filter(c => s.split(c).length === 2).sort().join('');
}

// function solution(s) {
//    return [...s].filter(c => s.match(new RegExp(c, 'g')).length === 1).sort().join('');
// }

// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }