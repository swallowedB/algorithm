function solution(myString, pat) {
   return myString.toUpperCase().split(pat.toUpperCase()).length !== 1 ? 1 : 0
}