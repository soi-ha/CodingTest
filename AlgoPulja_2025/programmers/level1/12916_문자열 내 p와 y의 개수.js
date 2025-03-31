function solution(s){
    const s_list = [...s.toLowerCase()]
    const counts = {};

    s_list.forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });
    
    return counts['p'] === counts['y'] ? true : false
}