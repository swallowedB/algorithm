function solution(my_string, alp) {
    let result = [];
    [...my_string].map((str) => {
        if(str === alp){
            result.push(str.toUpperCase())
        } else {
            result.push(str)
        }
    })
    
    return result.join('')
}