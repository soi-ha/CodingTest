function solution(n, control) {
   [...control].map(str => {
       if (str === 'w'){
           n += 1
       } else if (str === 's'){
           n -= 1
       } else if (str === 'd'){
           n += 10
       } else if (str === 'a'){
           n -= 10
       }
   })
    return n
}