function solution(my_string, index_list) {
    let result = "";
    
    for (let i = 0; i < index_list.length; i++) {
        const index = index_list[i];
        result += my_string[index];
    }

    return result;
}