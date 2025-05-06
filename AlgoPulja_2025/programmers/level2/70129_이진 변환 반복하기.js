function solution(s) {
    const result = [0,0]

    while (s != '1') {
        const removeZeroLength = s.replaceAll('0','').length
        result[1] += s.length - removeZeroLength
        s = removeZeroLength.toString(2)
        result[0] += 1
    }
    
    return result
}