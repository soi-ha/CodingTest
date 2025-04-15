function solution(absolutes, signs) {
    const result = absolutes.reduce((acc,cur,idx) => {
        return acc += signs[idx] ? cur : -cur
    },0)
    
    return result
}