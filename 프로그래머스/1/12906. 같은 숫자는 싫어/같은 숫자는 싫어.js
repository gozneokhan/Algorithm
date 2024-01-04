function solution(arr) {
    var answer = [];
    
    arr.forEach((value, index) => {
        if (index === 0 || value !== arr[index - 1]) {
            answer.push(value);
        }
    });
    
    return answer;
}
/*
1) function solution(arr) {: solution이라는 함수를 정의하고, 파라미터로 배열 arr을 받습니다.

2) var answer = [];: 빈 배열 answer를 선언합니다. 이 배열은 최종적으로 연속적으로 나타나는 숫자를 제거한 결과를 담을 것입니다.

3) arr.forEach((value, index) => {: 배열 arr를 순회하면서 각 원소에 대해 주어진 콜백 함수를 실행합니다. 콜백 함수는 현재 원소 value와 해당 원소의 인덱스 index를 인자로 받습니다.

*value: 현재 순회 중인 배열의 원소입니다. 각 순회에서 arr 배열의 원소가 value에 할당됩니다.

*index: 현재 순회 중인 배열의 원소의 인덱스입니다. 배열의 첫 번째 원소의 인덱스는 0이며, 순회가 진행됨에 따라 1씩 증가합니다. arr 배열의 각 원소에 대해 해당 원소의 인덱스가 index에 할당됩니다.

4) if (index === 0 || value !== arr[index - 1]) {: 현재 원소가 배열의 첫 번째 원소이거나 현재 원소가 이전 원소와 다를 경우에 아래의 블록을 실행합니다.

*index === 0: 현재 원소가 배열의 첫 번째 원소인 경우.

*value !== arr[index - 1]: 현재 원소가 이전 원소와 다른 경우.
위 두 조건 중 하나라도 만족하면 아래의 블록을 실행합니다.

5) answer.push(value);: 현재 원소를 answer 배열에 추가합니다. 즉, 연속적으로 나타나는 숫자 중 첫 번째 숫자만 answer 배열에 추가됩니다.

6) return answer;: 최종적으로 구성된 answer 배열을 반환합니다.

이 함수는 배열을 순회하면서 연속적으로 나타나는 숫자를 제거한 후, 남은 숫자들을 순서대로 담은 배열
*/