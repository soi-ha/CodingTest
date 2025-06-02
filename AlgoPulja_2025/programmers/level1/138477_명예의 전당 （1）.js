function solution(k, score) {
    const result = []
    const topList = []
    
    score.forEach(i => {
        if (topList.length < k) {
            topList.push(i)
        } else {
            let minValue = topList[0]
            let minIndex = 0
            for (let j = 1; j < topList.length; j++) {
                if (topList[j] < minValue) {
                    minValue = topList[j]
                    minIndex = j
                }
            }
            
            if (minValue < i) {
                topList.splice(minIndex,1)
                topList.push(i)
            }
        }
        
        const minTopList = Math.min(...topList)
        result.push(minTopList)
    })
    
    return result
}