function solution(x) {
    const sumNum = x.toString().split('').reduce((acc, cur) => acc += Number(cur), 0)
    
    return x % sumNum === 0
}