function solution(my_string, is_suffix) {
    var answer = 0;

    if (is_suffix.length <= my_string.length) {
        for (var i = 0; i < is_suffix.length; i++) {
            if (is_suffix[i] !== my_string[my_string.length - is_suffix.length + i]) {
                return answer;
            }
        }
        answer = 1;
    }

    return answer;
}