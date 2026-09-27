function solution(a, b) {
    let strNum = (a + '' + b)*1;
    let multiNum = 2 * a * b;
    
    return strNum > multiNum ? strNum : strNum == multiNum ? strNum : multiNum
}