function solution(num_list) {
    // 모든 원소의 곱 계산
    const product = num_list.reduce((acc, num) => acc * num, 1);

    // 모든 원소의 합 계산
    const sum = num_list.reduce((acc, num) => acc + num, 0);

    // 모든 원소의 곱이 합의 제곱보다 작으면 1, 크면 0 반환
    return product < Math.pow(sum, 2) ? 1 : 0;
}