function solution(strings, n) {
    strings.sort((a,b) => {
        const charA = a[n]
        const charB = b[n]
        
        return charA === charB ? a.localeCompare(b) : charA.localeCompare(charB)
    })
    
    return strings
}