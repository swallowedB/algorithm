function solution(my_string) {
    let strarray = my_string.split("")
    let result = [];
    
    strarray.forEach((str, i) => {
        if(!result.includes(str)){
          result.push(str)
        }
    })
    return result.join('')
}