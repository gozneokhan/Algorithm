function solution(start_num, end_num) {
    var answer = [];
    // start_num부터 end_num까지 1씩 감소하여 answer 배열에 추가
    for (let i = start_num; i >= end_num; i--) {
        answer.push(i);
    }
    return answer;
}