function solution(code) {
    let mode = 0
    
    const ret = [...code].reduce((acc,cur,idx) => {
        if (mode === 0){
            if (cur !== '1'){
                return idx % 2 ? acc : acc + cur
            }
            mode = 1
            return acc
        } else {
             if (cur !== '1'){
                return idx % 2 ? acc + cur : acc
            }
            mode = 0
            return acc
        }
    },'')
    
    return ret.length ? ret : 'EMPTY'
}