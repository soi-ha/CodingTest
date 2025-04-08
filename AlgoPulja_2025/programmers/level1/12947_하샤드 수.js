function solution(x) {
    const x_sum = [...String(x)].reduce((acc,cur) => acc + Number(cur),0)
    return x % x_sum === 0
}