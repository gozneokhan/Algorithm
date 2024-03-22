function solution(arr, intervals) {
    const [firstStart, firstEnd] = intervals[0];
    const [secondStart, secondEnd] = intervals[1];

    const firstSubarray = arr.slice(firstStart, firstEnd + 1);
    const secondSubarray = arr.slice(secondStart, secondEnd + 1);

    return [...firstSubarray, ...secondSubarray];
}