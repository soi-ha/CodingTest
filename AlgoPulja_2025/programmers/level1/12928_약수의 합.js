function sum(list) {
    return list.reduce((acc,cur)=> acc += cur,0)
}

function solution(n) {
    let result = []
    
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            result.push(i)
        }
    }
    
    return sum(result)
}