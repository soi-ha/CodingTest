function solution(n) {
    return Number([...String(n)].sort().reverse().join(''))
}