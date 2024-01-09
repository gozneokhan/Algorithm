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

/*
1) const answer = [];: 결과를 저장할 배열 answer를 선언합니다. 이 배열에는 각 문자의 최근 등장 위치와 현재 위치의 차이가 저장됩니다.

2) const last = {};: 각 문자의 최근 등장 위치를 저장할 객체 last를 선언합니다. 이 객체는 문자를 키(key)로 가지며, 해당 문자의 최근 등장 위치를 값(value)으로 가집니다.

3) for (let i = 0; i < s.length; i++) {: 문자열 s를 순회하는 반복문입니다. i는 현재 문자의 인덱스를 나타냅니다.

4) const current = s[i];: 현재 위치의 문자를 current에 저장합니다.

5) if (!(current in last)) { answer.push(-1); } else { ... }: 현재 문자가 이전에 등장한 적이 없는 경우, 즉 current가 last 객체에 키로 존재하지 않는 경우에는 -1을 answer 배열에 추가합니다.

6) answer.push(i - last[current]);: 현재 문자가 이전에 등장한 적이 있는 경우, 현재 위치(i)와 최근 등장 위치(last[current])의 차이를 계산하여 answer 배열에 추가합니다.

7) last[current] = i;: 현재 문자의 위치를 최신으로 갱신합니다. last 객체에 현재 문자를 키로 하고 현재 위치를 값으로 저장합니다.

8) return answer;: 최종적으로 구해진 결과 배열 answer를 반환합니다.
*/
