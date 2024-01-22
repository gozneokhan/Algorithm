function solution(num_list) {
    var oddSum = 0; // 홀수만 이어 붙인 수의 합을 저장할 변수
    var evenSum = 0; // 짝수만 이어 붙인 수의 합을 저장할 변수

    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            // 현재 숫자가 짝수일 경우
            evenSum = evenSum * 10 + num_list[i];
        } else {
            // 현재 숫자가 홀수일 경우
            oddSum = oddSum * 10 + num_list[i];
        }
    }

    // 홀수와 짝수를 이어붙인 수의 합을 반환
    return oddSum + evenSum;
}