function solution(n) {
    const str_li = String(n).split('').reverse()
    return str_li.map((str)=> Number(str))
}