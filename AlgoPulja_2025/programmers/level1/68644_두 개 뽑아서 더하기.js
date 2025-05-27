function solution(numbers) {
    numbers.sort((a,b) => a - b)
    const result = []
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const newNum = numbers[i] + numbers[j]
            result.push(newNum)
        }
    }
    
    return [...new Set(result)].sort((a, b) => a - b)
}