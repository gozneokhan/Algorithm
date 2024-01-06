function solution(my_string, overwrite_string, s) {
    // 결과를 저장할 변수
    var answer = '';

    // my_string의 처음부터 s 이전까지의 부분을 answer에 추가
    answer += my_string.slice(0, s);
    
    // overwrite_string을 answer에 추가
    answer += overwrite_string;

    // my_string의 (s + overwrite_string의 길이) 이후의 부분을 answer에 추가
    answer += my_string.slice(s + overwrite_string.length);

    // 최종적인 결과 반환
    return answer;
}