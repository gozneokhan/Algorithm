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