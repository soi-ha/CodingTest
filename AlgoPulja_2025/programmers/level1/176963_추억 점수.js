function solution(name, yearning, photo) {
    const people = {}
    for (let i = 0; i < name.length; i++) {
        people[name[i]] = yearning[i]
    }
    
    const result = []
    
    for (const list of photo) {
        let count = 0
        list.forEach(person => count += people[person] ? people[person] : 0)
        result.push(count)
    }
    
    return result
}