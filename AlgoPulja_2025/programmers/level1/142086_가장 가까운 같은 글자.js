function solution(s) {
    const list = [...s]
    const result = []
    
    list.forEach((x, idx) => {
        const last = s.slice(0, idx).lastIndexOf(x);

        if (last === -1) {
            result.push(-1);
        } else {
            result.push(idx - last);
        }
    });
    
    return result
}