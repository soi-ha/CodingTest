function solution(a, b, c, d) {
    const numbers = [a,b,c,d]
    const dup = new Set(numbers)
    const dup_value = [...dup]

    if (dup.size === 1){
        return 1111 * a
    } else if (dup.size === 2){
         const dup_numbers = dup_value.filter(num => numbers.filter(x => x === num).length === 3);
        if (dup_numbers.length === 1){
            const unique_number = dup_value.find(x => x !== dup_numbers[0])
            return (10 * dup_numbers[0] + unique_number)**2
        } else {
            return (dup_value[0] + dup_value[1]) * Math.abs(dup_value[0] - dup_value[1])
            }
    } else if (dup.size === 3){
         const unique_numbers = dup_value.filter(num => numbers.filter(x => x === num).length === 1);
        return unique_numbers[0] * unique_numbers[1]
    } else {
        return Math.min(...numbers)
        
    }
}