function solution(numbers) {
    let result = 0
    
    for (let i = 0; i <= 9; i++){
        if (numbers.includes(i)) continue
        result += i
    }
    
    return result
}
