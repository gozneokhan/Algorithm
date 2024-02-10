function solution(intStrs, k, s, l) {
    var answer = [];

    for (let i = 0; i < intStrs.length; i++) {
        const substring = intStrs[i].substring(s, s + l);
        const intValue = parseInt(substring);
        
        if (intValue > k) {
            answer.push(intValue);
        }
    }

    return answer;
}