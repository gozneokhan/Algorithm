function solution(s) {
    let answer = s;
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < numbers.length; i++) {
        // 문자열을 해당 숫자로 치환
        answer = answer.split(numbers[i]).join(i);
    }

    // 최종 결과를 숫자로 변환하여 반환
    return ~~(answer);
}  
/*
1) answer 변수에 입력 문자열 s를 복사합니다.

2) for 루프를 사용하여 numbers 배열에 있는 각 영어 단어를 해당 숫자로 치환합니다.

* answer.split(numbers[i]): answer 문자열을 numbers[i]로 나누어 배열로 변환합니다.

* join(i): 각 배열 요소를 숫자 i로 연결하여 문자열을 생성합니다.

* 이렇게 하면 answer 문자열에서 numbers[i]를 해당 숫자 i로 치환한 새로운 문자열이 만들어집니다.

* 이 과정을 for 루프를 통해 모든 영어 단어에 대해 반복합니다.

3) for 루프 종료 후, answer에는 영어 단어가 숫자로 치환된 문자열이 저장되어 있습니다.

4) ~~(answer): answer를 비트 연산자 ~~를 사용하여 숫자로 변환합니다. 이 연산자는 소수 부분을 버리고 정수 부분만을 남깁니다.

5) 최종적으로 변환된 숫자를 반환합니다.
*/