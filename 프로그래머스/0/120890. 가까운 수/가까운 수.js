function solution(array, n) {
   array.sort((a, b) => a - b)
    let difference = Infinity;
    let result = 0;
    
    for (let i of array) {
        if(Math.abs(n-i) < difference) {
            difference = Math.abs(n-i),
            result = i
        }
    }
    return result;
}

// function solution(array, n) {
//     return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
// }

// function solution(array, n) {
//     array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
//     return array[0];
// }