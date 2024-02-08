function solution(numbers) {
    var answer = [];
    
    // 두 개의 인덱스에 있는 수를 더해서 만들 수 있는 모든 수 찾기
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            
            // 중복된 합을 방지하기 위해 answer 배열에 없는 경우에만 추가
            if (!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    
    // 오름차순으로 정렬
    answer.sort((a, b) => a - b);
    
    return answer;
}
