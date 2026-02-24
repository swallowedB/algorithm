function solution(clothes) {
    const closet = new Map();
    
    for(const c of clothes){
        closet.set(c[1], (closet.get(c[1]) ?? 0)+1)
    }
    
    const result = [...closet.values()].reduce((acc, cur) => acc *= (cur+1), 1)
    
    return result-1
}