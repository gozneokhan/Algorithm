function solution(s) {
    const answer = [];
    const last = {};

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        // 현재 문자가 이전에 등장한 적이 없으면 -1 추가
        if (!(current in last)) {
            answer.push(-1);
        } else {
            // 현재 문자의 가장 최근 등장한 위치 추가
            answer.push(i - last[current]);
        }

        // 현재 문자의 위치를 갱신
        last[current] = i;
    }

    return answer;
}
