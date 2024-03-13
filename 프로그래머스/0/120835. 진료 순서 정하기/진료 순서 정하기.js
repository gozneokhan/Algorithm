function solution(emergency) {
    let emergency_order = emergency.slice().sort((a, b) => b - a);
    return emergency.map(v => emergency_order.indexOf(v) + 1);
}