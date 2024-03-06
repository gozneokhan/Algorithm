function solution(numbers) {
   return numbers.map(v => v * 2);
}
// map()은 단순히 어떤 벨류에 연산을 하는 것보단 특정한 값을 뽑아낼 때 주로 사용함

// const solution = (numbers) => numbers.map((number) => number * 2)

// function solution(numbers) {
//     return numbers.reduce((a, b) => [...a, b * 2], []);
// }

// function solution(numbers) {
//     var answer = [];
//     for(var i=0; i<numbers.length; i++){
//         answer[i] = numbers[i] * 2;
//     }
//     return answer;
// }