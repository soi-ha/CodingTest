function solution(a, d, included) {
    const result = included.reduce((acc,cur,idx)=>{
        return acc += cur ? (a + idx * d) : 0
    },0)
    
    return result
}