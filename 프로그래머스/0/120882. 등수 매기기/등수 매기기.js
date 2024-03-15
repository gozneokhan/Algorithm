function solution(score) {
    let sum = score.map(v => v[0] + v[1]);
    let arrangedArr = sum.slice().sort((a, b) => b -a);
   return sum.map((v) => arrangedArr.indexOf(v)+1);
}