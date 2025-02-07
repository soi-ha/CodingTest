function solution(my_string, overwrite_string, s) {
    const end_s = overwrite_string.length
    const remain_front = my_string.slice(0,s)
    const remain_back = my_string.slice(s+end_s)
    
    return remain_front + overwrite_string + remain_back
}