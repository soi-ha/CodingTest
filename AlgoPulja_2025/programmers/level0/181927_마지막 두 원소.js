function solution(num_list) {
    const copy = num_list.slice()
    const last_num = num_list[num_list.length-1]
    const last_prev_num = num_list[num_list.length-2]
    
    copy.push(last_num > last_prev_num ? last_num - last_prev_num : last_num * 2)
    
    return copy
}