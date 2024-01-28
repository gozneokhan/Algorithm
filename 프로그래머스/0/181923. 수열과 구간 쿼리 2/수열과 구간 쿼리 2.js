function solution(arr, queries) {
    var answer = [];

    for (let query of queries) {
        const [s, e, k] = query;
        let minVal = Infinity; // 초기값을 무한대로 설정

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
            }
        }

        if (minVal === Infinity) {
            // 만약 최솟값이 여전히 무한대라면 해당 범위에 k보다 큰 값이 없음
            answer.push(-1);
        } else {
            answer.push(minVal);
        }
    }

    return answer;
}