function solution(s) {
    const half_s = s.length / 2
    return Number.isInteger(half_s) ? s.slice(half_s-1,half_s+1) : s.slice(parseInt(half_s),parseInt(half_s)+1)
}