function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    // 각 명함에 대해 가로와 세로 중 더 긴 쪽을 고려하여 최대 가로와 세로 길이를 구함
    for (const size of sizes) {
        const [w, h] = size;
        maxWidth = Math.max(maxWidth, Math.max(w, h));
        maxHeight = Math.max(maxHeight, Math.min(w, h));
    }

    // 최대 가로와 세로 길이를 곱하여 지갑의 크기를 구함
    const answer = maxWidth * maxHeight;
    return answer;
}