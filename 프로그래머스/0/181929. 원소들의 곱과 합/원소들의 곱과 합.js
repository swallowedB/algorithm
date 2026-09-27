function solution(num_list) {
    let numMulti = num_list.reduce((acc, cur) => acc *= cur , 1)
    let numSum = num_list.reduce((acc, cur) => acc += cur , 0)
    
    return numMulti > (numSum**2) ? 0 : 1
}