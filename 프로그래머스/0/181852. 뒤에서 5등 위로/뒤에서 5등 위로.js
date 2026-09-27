function solution(num_list) {
    let numSlice = num_list.lenegth-5
    return num_list.sort((a,b) => a-b).slice(5,)
}