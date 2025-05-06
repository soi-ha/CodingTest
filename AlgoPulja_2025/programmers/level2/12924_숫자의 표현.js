function solution(n) {
    let result = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i % 2 === 1) result++;
            
            const j = n / i;
            if (i !== j && j % 2 === 1) result++;
        }
    }
    return result;
}
