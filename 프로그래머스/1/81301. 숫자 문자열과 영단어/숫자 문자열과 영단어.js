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