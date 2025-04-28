function solution(left, right) {
    let result = 0
    
    for (let i= left ; i <= right; i++){
        let count = 0
        
        for (let x = 1; x <= i; x++){
            if (i % x === 0) count++
        }
        
        if (count % 2 === 0) {
            result += i
        } else {
            result -= i
        }
    }
    
    return result
}