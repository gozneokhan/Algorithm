function solution(spell, dic) {
    let answer = 0;
    return dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1 : 2;
}