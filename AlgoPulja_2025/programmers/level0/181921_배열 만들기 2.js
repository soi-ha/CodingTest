function solution(l, r) {
    const result = [];
    
    function dfs(current, level) {
        if (current > r) return; 

        if (current >= l && current <= r) {
            result.push(current);
        }

        if (current !== 0) {
            dfs(current * 10, level + 1);
        }
        dfs(current * 10 + 5, level + 1);
    }
    
    dfs(0, 0);
    result.sort((a, b) => a - b); 
    
    return result.length ? result : [-1];
}