function solution(arr, queries) {
    var answer = [...arr]; // arr를 복사하여 새로운 배열을 만듭니다.

    for (let query of queries) {
        const [i, j] = query;
        // arr[i]와 arr[j]의 값을 서로 바꿉니다.
        [answer[i], answer[j]] = [answer[j], answer[i]];
    }

    return answer;
}