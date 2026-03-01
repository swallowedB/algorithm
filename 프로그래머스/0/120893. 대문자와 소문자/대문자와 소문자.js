function solution(my_string) {
  return [...my_string]
    .map((ch) => ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase())
    .join('');
}