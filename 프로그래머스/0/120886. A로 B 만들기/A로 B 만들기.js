function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

// function solution(before, after) {
//     return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
// }