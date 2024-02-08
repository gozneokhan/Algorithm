function solution(arr) {
    var answer = [];
    
    arr.forEach((value, index) => {
        if (index === 0 || value !== arr[index - 1]) {
            answer.push(value);
        }
    });
    
    return answer;
}
