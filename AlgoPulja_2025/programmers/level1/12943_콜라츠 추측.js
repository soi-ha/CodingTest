function solution(num) {
    if (num === 1) return 0
    
    let result = 0
    
    while (num != 1) {
        if (num % 2 === 0){
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        result += 1
        
        if(result === 500 && num != 1){
            result = -1
            break
        }
    }
    
    return result
}