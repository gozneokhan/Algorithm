function solution(num_list) {
    var sum_even = 0; // 짝수 번째 원소들의 합을 저장할 변수
    var sum_odd = 0; // 홀수 번째 원소들의 합을 저장할 변수

    // num_list의 원소를 반복하면서 홀수 번째와 짝수 번째를 구분하여 합을 계산합니다.
    for (var i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) { // 짝수 번째 원소인 경우
            sum_even += num_list[i];
        } else { // 홀수 번째 원소인 경우
            sum_odd += num_list[i];
        }
    }

    // 두 합 중 큰 값을 선택하여 반환합니다.
    return Math.max(sum_even, sum_odd);
}