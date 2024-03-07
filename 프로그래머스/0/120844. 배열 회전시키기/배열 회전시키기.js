function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}

// function solution(numbers, direction) {
//     if(direction === 'right') {
//       numbers = [numbers.pop(), ...numbers]
//     } else {
//         numbers = [...numbers.slice(1), numbers.shift()]
//     }
//     return numbers
// }