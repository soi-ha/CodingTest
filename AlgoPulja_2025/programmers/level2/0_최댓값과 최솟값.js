function solution(s) {
    const li = s.split(' ')
    return `${Math.min(...li)} ${Math.max(...li)}`
    
}
