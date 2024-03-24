function solution(num_list, n) {
    // n 번째 이후의 원소와 n 번째까지의 원소를 나누기
    const afterN = num_list.slice(n);
    const beforeN = num_list.slice(0, n);
    
    // 두 리스트를 이어 붙이기
    return afterN.concat(beforeN);
}