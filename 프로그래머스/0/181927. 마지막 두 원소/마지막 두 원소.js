function solution(num_list) {
    var answer = [];

    for (var i = 0; i < num_list.length; i++) {
        answer.push(num_list[i]); // 현재 원소를 answer에 추가

        if (i === num_list.length - 1) {
            // 마지막 원소일 때
            if (num_list[i] > num_list[i - 1]) {
                // 현재 원소가 그전 원소보다 크면
                answer.push(num_list[i] - num_list[i - 1]);
            } else {
                // 현재 원소가 그전 원소보다 크지 않으면
                answer.push(num_list[i] * 2);
            }
        }
    }

    return answer;
}