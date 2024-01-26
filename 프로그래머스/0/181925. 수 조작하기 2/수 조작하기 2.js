function solution(numLog) {
    let answer = '';

    for (let i = 0; i < numLog.length; i++) {
        const diff = numLog[i] - (i > 0 ? numLog[i - 1] : 0);

        if (diff === 1) {
            answer += 'w';
        } else if (diff === -1) {
            answer += 's';
        } else if (diff === 10) {
            answer += 'd';
        } else if (diff === -10) {
            answer += 'a';
        }
    }

    return answer;
}