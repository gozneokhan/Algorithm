function solution(num_list) {
    // 리스트를 오름차순으로 정렬합니다.
    num_list.sort(function(a, b) {
        return a - b;
    });

    // 가장 작은 5개의 수를 제외한 나머지를 answer에 담습니다.
    var answer = num_list.slice(5);

    return answer;
}