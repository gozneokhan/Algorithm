// function solution(order) {
//     let value = order.toString().match(/[369]/g) ?? [];
//     return value.length;
// }

// function solution(order) {
//    return order.toString().split('').filter(v => v === '3' || v === '6' || v === '9' ? true : false).length
// }

function solution(order) {
    const s = new Set('369')
   return order.toString().split('').filter(v =>s.has(v)  ? true : false).length
}