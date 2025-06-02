function solution(n) {
    let battery = 0
    let x = n
    
    while (x > 0) {
        if (x % 2 === 1) {
            battery += 1
            x -= 1
        }
        
        x = x / 2
    }

    return battery
}