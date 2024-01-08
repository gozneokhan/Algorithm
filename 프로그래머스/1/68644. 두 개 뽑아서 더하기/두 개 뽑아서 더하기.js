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
/*
1) function solution(numbers): 배열 numbers를 받아서 문제를 해결하는 함수를 선언합니다.

2) var answer = []: 결과를 담을 빈 배열 answer를 선언합니다.

3) for (let i = 0; i < numbers.length - 1; i++): 배열의 첫 번째 수부터 뒤에서 두 번째 수까지 반복합니다.

4) for (let j = i + 1; j < numbers.length; j++): i번째 수 다음부터 배열의 끝까지 반복합니다.

5) const sum = numbers[i] + numbers[j];: 현재 두 수의 합을 계산하여 sum에 저장합니다.

6) if (!answer.includes(sum)): 만약 answer 배열에 현재 합이 포함되어 있지 않다면 아래를 실행합니다.

7) answer.push(sum);: 현재 합을 answer 배열에 추가합니다.

8) answer.sort((a, b) => a - b);: 최종적으로 모든 합을 구한 후에는 answer 배열을 오름차순으로 정렬합니다.

9) return answer;: 정렬된 결과를 반환합니다.
*/