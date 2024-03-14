function solution(spell, dic) {
    let answer = 0;
    return dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1 : 2;
}

// function solution(spell, dic) {
//     return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
// }