function solution(my_string) {
    let result = [];
    [...my_string].forEach((str) => {
        result.push(str.toLowerCase())
    })
    
    return result.sort().join('')
}