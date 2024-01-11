function solution(my_string, k) {
    var answer = '';

    // 주어진 횟수(k)만큼 반복하여 answer에 my_string을 더합니다.
    for (var i = 0; i < k; i++) {
        answer += my_string;
    }

    // 최종적으로 만들어진 문자열을 반환합니다.
    return answer;
}
