function solution(s) {
    s = s.split(' ');
    let result = [];
    for (let i of s) {
        if (i === 'Z') {
            result.pop()
        } else {
            result.push(+i)
        }
    }
    return result.reduce((a, c) => a + c, 0);
}

// function solution(s) {
//     const stack = []
//     s.split(' ').forEach((target) => {
//         if(target === 'Z') stack.pop();
//         else stack.push(+target)
//     })
//     return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// }

// function solution(s) {
//     let arr = s.split(" ");
//     while ( arr.indexOf('Z') > -1) {
//         arr.splice( arr.indexOf('Z')-1, 2);
//     }
//     return arr.reduce((a,b) => parseInt(a) + parseInt(b),0)
// }