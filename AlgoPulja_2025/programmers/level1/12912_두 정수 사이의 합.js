function solution(a, b) {
    if(a===b) return a
    
    if (a > b) {
        let temp = b
        b = a
        a = temp
    }

    let result = 0
    
    for(let i = a; i <= b; i++){
        result += i
    }
    
    return result
    
}