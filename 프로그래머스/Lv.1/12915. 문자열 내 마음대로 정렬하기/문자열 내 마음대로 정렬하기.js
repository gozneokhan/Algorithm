function solution(strings, n) {
    // strings를 n번째 글자를 기준으로 오름차순 정렬
    strings.sort((a, b) => {
        // 만약 n번째 글자가 같다면 사전순으로 정렬
        if (a[n] === b[n]) {
            return (a > b) - (a < b);
        }
        // n번째 글자를 기준으로 정렬
        return (a[n] > b[n]) - (a[n] < b[n]);
    });

    return strings;
}
/*
1) function solution(strings, n) {: 함수 solution을 정의하고, 입력으로 문자열 배열 strings와 정수 n을 받습니다.

2) strings.sort((a, b) => {: strings 배열을 sort 메소드를 사용하여 정렬합니다. sort 메소드의 인자로는 비교 함수가 들어갑니다.

3) if (a[n] === b[n]) {: 비교 함수 내부에서는 현재 비교 중인 두 문자열 a와 b의 n번째 글자를 비교합니다.

4) return (a > b) - (a < b);: 만약 n번째 글자가 같다면, 두 문자열 전체를 사전순으로 비교하여 정렬합니다. 이는 a가 b보다 크면 1, 작으면 -1, 같으면 0을 반환하는 비교식입니다.

5) return (a[n] > b[n]) - (a[n] < b[n]);: n번째 글자를 기준으로 비교하여 정렬합니다. 마찬가지로 크기에 따라 1, -1, 0을 반환합니다.

6) });: sort 메소드의 비교 함수 종료.

7) return strings;: 정렬된 strings 배열을 반환합니다.
*/