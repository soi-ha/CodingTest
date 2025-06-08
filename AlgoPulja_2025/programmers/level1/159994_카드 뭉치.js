function solution(cards1, cards2, goal) {
    let card1 = 0
    let card2 = 0
    let word1 = ''
    let word2 = ''
    
    for (const w of goal) {
        if (card1 === 0 && card2 === 0 ) {
            word1 = cards1.shift()
            word2 = cards2.shift()
        }
        
        if (word1 === w) {
            card1++
            word1 = cards1.shift()
        } else if (word2 === w) {
            card2++
            word2 = cards2.shift()
        } else {
            return "No"
        }
    }
    
    return "Yes"
}