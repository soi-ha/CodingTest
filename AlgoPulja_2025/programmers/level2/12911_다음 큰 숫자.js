function solution(n) {
    const binaryNumberOneLengthOfN = n.toString(2).split('0').join('').length
    let result = n + 1
    
    while (true) {
        const binaryOneLength = result.toString(2).split('0').join('').length
    
        if (binaryOneLength === binaryNumberOneLengthOfN) break
        
        result += 1
    }
    
    return result
}