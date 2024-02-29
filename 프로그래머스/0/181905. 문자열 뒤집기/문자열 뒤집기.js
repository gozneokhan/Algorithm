function solution(my_string, s, e) {
    var answer = '';

    var substring = my_string.substring(s, e + 1);

    var reversedSubstring = substring.split('').reverse().join('');

    answer = my_string.substring(0, s) + reversedSubstring + my_string.substring(e + 1);

    return answer;
}