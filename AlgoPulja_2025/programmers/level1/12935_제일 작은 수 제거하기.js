function solution(arr) {
    if (arr.length < 2) return [-1]
    
    let min_num = Math.min(...arr)
    return arr.filter(num => num !== min_num)
}