function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        // 배열을 자르고 정렬
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        slicedArray.sort((a, b) => a - b);

        // k번째 숫자를 answer 배열에 추가
        answer.push(slicedArray[commands[i][2] - 1]);
    }

    return answer;
}
/*
1) function solution(array, commands) {: 함수의 시작. 배열과 명령을 받아 결과를 반환하는 함수 정의.

2) var answer = [];: 결과를 저장할 빈 배열을 만듭니다.

3) for (let i = 0; i < commands.length; i++) {: commands 배열을 순회하면서 각 명령에 대해 반복합니다.

4) let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);: i번째 명령의 시작부터 끝까지 배열을 자릅니다. (배열은 0부터 시작하므로 -1을 해줍니다)

5) slicedArray.sort((a, b) => a - b);: 자른 배열을 정렬합니다. 오름차순으로 정렬하려면 비교 함수를 사용하여 정렬합니다.

6) answer.push(slicedArray[commands[i][2] - 1]);: 정렬된 배열에서 k번째 숫자를 결과 배열인 answer에 추가합니다. (k번째는 마찬가지로 0부터 시작하므로 -1을 해줍니다)

7) return answer;: 최종적으로 결과 배열을 반환합니다.
*/