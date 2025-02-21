function solution(num_list) {
    let mul = 1
    let sum = 0
    
    num_list.map((num)=>{
        mul *= num
        sum += num
        return
    })
    
    return mul < sum ** 2 ? 1 : 0
}