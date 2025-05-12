function solution(t, p) {
    const pLength = p.length
    let result = 0
    
    let firstNum = 0
    let lastNum = pLength
    
    while (true) {
        const sliceT = t.slice(firstNum, lastNum)
        if (sliceT.length !== pLength) break
        
        if (sliceT <= p) result += 1
        
        firstNum += 1
        lastNum += 1
    }
    
    return result
}