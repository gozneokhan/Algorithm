// 두 문자열을 교대로 합쳐서 새로운 문자열을 생성하는 함수
function solution(str1, str2) {
    let result = '';

    // 각 문자열의 같은 인덱스의 문자를 교대로 합쳐 결과에 추가
    for (let i = 0; i < str1.length; i++) {
        result += str1[i] + str2[i];
    }

    return result;
}
