let solution = e => e.map(v => [...e].sort((a,b) => b - a).indexOf(v) + 1)

// function solution(emergency) {
//     let emergency_order = emergency.slice().sort((a, b) => b - a);
//     return emergency.map(v => emergency_order.indexOf(v) + 1);
// }

// function solution(emergency) {
//     let emergency_order = [...emergency].sort((a, b) => b - a);
//     return emergency.map(v => emergency_order.indexOf(v) + 1);
// }