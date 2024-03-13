function solution(numbers) {
    return +numbers.replaceAll('one', '1').replaceAll('two', '2').replaceAll('three', '3').replaceAll('four', '4').replaceAll('five', '5').replaceAll('six', '6').replaceAll('seven', '7').replaceAll('eight', '8').replaceAll('nine', '9').replaceAll('zero', '0');
}

// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         numbers = numbers.split(number[i]).join(i)
//     }
//     return +numbers
// }

// let solution = n => Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i) => t.replaceAll(s,i),n))

// function solution(numbers) {
//     const obj = {
//         zero: 0, 
//         one: 1, 
//         two: 2, 
//         three: 3, 
//         four: 4,
//         five: 5, 
//         six: 6,
//         seven: 7,
//         eight: 8, 
//         nine: 9,
//     };

//     return +numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
//         return obj[v];
//     })
// }