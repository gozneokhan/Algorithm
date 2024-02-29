function solution(my_string, is_prefix) {
    var answer = 0;

    // is_prefix가 my_string의 접두사인지 확인
    if (my_string.startsWith(is_prefix)) {
        answer = 1;
    }

    return answer;
}