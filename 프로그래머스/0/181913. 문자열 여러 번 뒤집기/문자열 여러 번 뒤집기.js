function solution(my_string, queries) {
    var answer = my_string;

    for (var i = 0; i < queries.length; i++) {
        var start = queries[i][0];
        var end = queries[i][1];
        
        // 문자열을 자르고 뒤집은 후 다시 합치기
        answer = answer.slice(0, start) + answer.slice(start, end + 1).split('').reverse().join('') + answer.slice(end + 1);
    }

    return answer;
}