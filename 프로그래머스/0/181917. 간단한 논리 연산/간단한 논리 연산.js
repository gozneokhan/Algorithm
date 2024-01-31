function solution(x1, x2, x3, x4) {
    // 논리식 계산
    var result = (x1 || x2) && (x3 || x4);
    
    // 계산 결과 반환
    return result;
}