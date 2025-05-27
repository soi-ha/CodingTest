function solution(s, n) {
    const li = s.split('')
    const result = li.map(x => {
        if (x === ' ') return x
         const code = x.charCodeAt();
        
        if (code >= 65 && code <= 90) {
          return String.fromCharCode((code - 65 + n) % 26 + 65);
        }
        
        if (code >= 97 && code <= 122) {
          return String.fromCharCode((code - 97 + n) % 26 + 97);
        }
       
    })
    
    return result.join('')
}