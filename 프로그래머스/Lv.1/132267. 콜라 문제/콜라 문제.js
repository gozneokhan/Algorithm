function solution(a, b, n) {
    var answer = 0;

    // 초기에 상빈이가 가지고 있는 빈 병의 수
    var emptyBottles = n;

    while (emptyBottles >= a) {
        // 현재 가지고 있는 빈 병으로 교환 가능한 콜라 수 계산
        var colaFromExchanges = Math.floor(emptyBottles / a) * b;

        // 콜라를 받고 남은 빈 병의 수 갱신
        emptyBottles = colaFromExchanges + (emptyBottles % a);

        // 받은 콜라 수를 정답에 더함
        answer += colaFromExchanges;
    }

    return answer;
}