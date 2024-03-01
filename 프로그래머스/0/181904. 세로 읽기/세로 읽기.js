function solution(my_string, m, c) {
    var answer = '';

    // 한 줄에 m 글자씩 나누기
    for (let i = 0; i < my_string.length; i += m) {
        // c번째 열의 글자들을 가져와서 문자열로 결합
        answer += my_string[i + c - 1];
    }

    return answer;
}