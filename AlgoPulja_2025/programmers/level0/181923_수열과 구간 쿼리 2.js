function solution(arr, queries) {
    const result = queries.map(([s,e,k])=> {
        const slice_arr = arr.slice(s,e + 1)
        const big_k = slice_arr.filter(i => i > k)
        return big_k.length ? Math.min(...big_k) : -1
    })
    
    return result
}