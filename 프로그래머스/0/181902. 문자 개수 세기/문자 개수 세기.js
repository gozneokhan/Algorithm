function solution(my_string) {
    var answer = Array(52).fill(0); // 알파벳의 개수를 담을 배열 초기화
    for (var i = 0; i < my_string.length; i++) {
        var charCode = my_string.charCodeAt(i); // 문자의 Unicode 코드
        if (charCode >= 65 && charCode <= 90) { // 대문자인 경우
            answer[charCode - 65]++; // 해당 알파벳의 개수 증가
        } else if (charCode >= 97 && charCode <= 122) { // 소문자인 경우
            answer[charCode - 71]++; // 해당 알파벳의 개수 증가
        }
    }
    return answer;
}