function solution(rsp) {
    var answer = '';
    
    [...rsp].forEach((n) => {
        if(n === '2'){
            return answer+='0'
        } else if (n === '0'){
            answer+='5'
        } else {
            answer+='2'
        }
    })
    
    return answer;
}