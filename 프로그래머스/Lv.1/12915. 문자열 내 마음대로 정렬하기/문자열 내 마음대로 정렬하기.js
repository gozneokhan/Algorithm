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
