function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

// function solution(my_string, letter) {
//     return my_string.replaceAll(letter, "");
// }

// function solution(my_string, letter) {
//     let reg = new RegExp(letter, 'g');
//     return my_string.replace(reg, '');
// }