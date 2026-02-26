function solution(absolutes, signs) {
    let num = [];
    absolutes.map((ab, i) => {
        let sign = signs[i] ? 1 : -1
        num.push(ab*sign)

    })
    return num.reduce((acc, cur) => acc += cur, 0)
}