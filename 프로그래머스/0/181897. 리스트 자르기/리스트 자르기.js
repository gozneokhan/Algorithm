function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    let start = 0;
    let end = num_list.length;

    switch (n) {
        case 1:
            end = b + 1;
            break;
        case 2:
            start = a;
            break;
        case 3:
            start = a;
            end = b + 1;
            break;
        case 4:
            start = a;
            end = b + 1;
            answer = [];
            for (let i = start; i < end; i += c) {
                answer.push(num_list[i]);
            }
            return answer;
    }

    return num_list.slice(start, end);
}