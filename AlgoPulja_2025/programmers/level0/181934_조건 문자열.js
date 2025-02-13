function solution(ineq, eq, n, m) {
    const isEq = eq === '=' ? true : false
    
    let result = false
    if (isEq){
        result = ineq === '>' ? n >= m : n <= m
    } else {
        result = ineq === '>' ? n > m : n < m
    }
    return result ? 1 : 0
}