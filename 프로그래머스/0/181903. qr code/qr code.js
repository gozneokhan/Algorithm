function solution(q, r, code) {
    var answer = '';
    for (let i = 0; i<code.length; i++) {
        if (i % q === r) {
            answer += code[i]
        }
    }
    return answer;
}

// 문자열 code의 각 인덱스를 q로 나눈 나머지가 r인 경우 찾기 
// 인덱스의 문자를 순서대로 추출해서 새로운 문자열 만들기 
