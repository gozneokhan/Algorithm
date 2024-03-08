function solution(my_string) {
    return [...new Set(my_string)].join('');
}

// let solution = s => [...s].filter((c,i) => s.indexOf(c) == i).join('')

// function solution(my_string) {
//     return my_string.split('').filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     }).join('');
// }