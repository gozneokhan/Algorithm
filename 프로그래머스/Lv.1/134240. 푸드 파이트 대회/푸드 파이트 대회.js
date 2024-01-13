function solution(food) {
  let answer = "";
    
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(~~(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}
/*
1) let answer = "";: 결과 문자열을 저장할 변수 answer를 초기화합니다.

2) for (let i = 1; i < food.length; i++) {: 주어진 food 배열의 두 번째 원소부터 시작하여 반복문을 실행합니다.

3) answer += String(i).repeat(~~(food[i] / 2));: 현재의 i 값에 대해, 해당 인덱스의 food 배열 값을 2로 나눈 몫 만큼 i를 반복하여 answer에 추가합니다. (~~ 연산자는 소수점 이하를 버리는 역할을 합니다.)

4) return answer + "0" + [...answer].reverse().join("");: 위의 반복이 끝난 후, answer에 문자열 "0"을 추가하고, answer를 배열로 변환하여 뒤집고, 다시 문자열로 합쳐서 최종 결과를 반환합니다.
*/
