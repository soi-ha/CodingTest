function solution(numLog) {
    let n = numLog[0]
    const result = numLog.map(num => {
        if (n === num) return ''
        
        const control = num - n
        if (control === 1){
            n += 1
            return 'w'
        } else if (control === -1){
            n -= 1
            return 's'
        } else if (control === 10){
            n += 10
            return 'd'
        } else if (control === -10){
            n -= 10
            return 'a'
        }
    })
    return result.join('')
}