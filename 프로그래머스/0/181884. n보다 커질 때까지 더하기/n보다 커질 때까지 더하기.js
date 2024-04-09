function solution(numbers, n) {
    let sum = 0;
    let i = 0;
    
    while (sum <= n && i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    
    return sum;
}