function solution(names) {
    var answer = [];
    var index = 0;

    // names 배열의 길이가 5 이하일 때는 한 그룹으로 처리
    if (names.length <= 5) {
        answer.push(names);
    } else {
        // 5명씩 묶어서 그룹 만들기
        while (index < names.length) {
            answer.push(names.slice(index, index + 5));
            index += 5;
        }
    }

    // 각 그룹의 첫 번째 사람 이름 추출하여 새로운 배열에 저장
    answer = answer.map(group => group[0]);

    return answer;
}
