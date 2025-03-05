function solution(my_string, index_list) {
    const result = index_list.map(i => my_string[i])
    return result.join('')
}