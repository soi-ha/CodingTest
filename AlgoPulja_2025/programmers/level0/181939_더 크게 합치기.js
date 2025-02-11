function solution(a, b) {
    const s_a = String(a)
    const s_b = String(b)
    
    const ab = s_a + s_b
    const ba = s_b + s_a
    
    return Number(ab) >= Number(ba) ? Number(ab) : Number(ba)
}