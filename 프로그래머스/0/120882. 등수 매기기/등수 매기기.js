function solution(score) {
    let sum = score.map(v => v[0] + v[1]);
    let arrangedArr = sum.slice().sort((a, b) => b -a);
   return sum.map((v) => arrangedArr.indexOf(v)+1);
}

// function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }

// let solution=s=>s.map(([a,b])=>(a+b)/2).map((n,_,r)=>[...r].sort((a, b)=>b-a).indexOf(n)+1)