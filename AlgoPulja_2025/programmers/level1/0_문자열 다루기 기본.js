function solution(s) {
    if (!(s.length === 4 || s.length === 6)) return false
    
    const boolean_li = [...s].map((str) => isNaN(str) ? false : true)
    return !boolean_li.includes(false)
}
