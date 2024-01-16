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
/*
1) function solution(a, b, n): 콜라를 받기 위한 함수를 정의하며, 매개변수로는 빈 병을 교환하는 규칙을 나타내는 a, 교환 시 받는 콜라 병 수를 나타내는 b, 그리고 상빈이가 처음에 가지고 있는 빈 병의 개수를 나타내는 n이 주어진다.

2) var answer = 0;: 최종적으로 상빈이가 받을 수 있는 콜라 병의 수를 저장하는 변수 answer를 초기화한다.

3) var emptyBottles = n;: 초기에 상빈이가 가지고 있는 빈 병의 수를 emptyBottles 변수에 저장한다.

4) while (emptyBottles >= a) {: 빈 병이 a보다 많을 때까지 계속해서 루프를 실행한다.

5) var colaFromExchanges = Math.floor(emptyBottles / a) * b;: 현재 가지고 있는 빈 병으로 교환 가능한 콜라의 수를 계산한다.

6) emptyBottles = colaFromExchanges + (emptyBottles % a);: 콜라를 받고 남은 빈 병의 수를 갱신한다.

7) answer += colaFromExchanges;: 받은 콜라 수를 정답에 더한다.

8) return answer;: 최종적으로 상빈이가 받을 수 있는 콜라 병의 수를 반환한다.

9) console.log(solution(2, 1, 20));: 예제를 이용하여 함수를 호출하고 결과를 출력한다.
*/