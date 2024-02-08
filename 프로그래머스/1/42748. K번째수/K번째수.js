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
