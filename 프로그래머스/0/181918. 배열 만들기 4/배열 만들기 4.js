function solution(arr) {
    var stk = [];
    var i = 0;

    while (i < arr.length) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            // stk가 빈 배열이거나 stk의 마지막 원소가 arr[i]보다 작을 때
            stk.push(arr[i]);
            i++;
        } else {
            // stk의 마지막 원소가 arr[i]보다 크거나 같을 때
            stk.pop();
        }
    }

    return stk;
}