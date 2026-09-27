function solution(order) {
    let count = 0;
    let orderArr =  (order += '').split('')
    
    orderArr.forEach((i) => {
        if(i === '3' || i === '6' || i === '9'){
            count++
        }
    })
    
    return count;
}