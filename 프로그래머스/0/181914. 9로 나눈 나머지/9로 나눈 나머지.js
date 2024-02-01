function solution(number) {
    let sumOfDigits = 0;

    // 각 자리 숫자의 합을 계산
    for (let i = 0; i < number.length; i++) {
        sumOfDigits += parseInt(number[i]);
    }

    // 합을 9로 나눈 나머지를 반환
    return sumOfDigits % 9;
}