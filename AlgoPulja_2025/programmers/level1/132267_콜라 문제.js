function solution(a, b, n) {
    let result = 0
    while (n >= a) {
        const givenB = parseInt(n / a) * b
        result += givenB
        n = n - (a * parseInt(n / a)) + givenB
    }
    return result
}