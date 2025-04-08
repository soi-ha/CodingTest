function solution(arr, divisor) {
    const filterArr = arr.filter(x => x % divisor === 0)
    return filterArr.length === 0 ? [-1]:filterArr.sort((a, b) => a - b);
}