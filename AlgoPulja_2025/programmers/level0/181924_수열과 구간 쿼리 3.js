function solution(arr, queries) {
    queries.map(([i,j])=>{
        const prev_i = arr[i]
        const prev_j = arr[j]
        arr[i] = prev_j
        arr[j] = prev_i
    })
    return arr
}