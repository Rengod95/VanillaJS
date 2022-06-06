const solution = (x,n) =>{ // x는 배수의 대상 n은 배열 크기
    return Array(n).fill(x).map((value,index) =>value = (index+1) *value);
}

console.log(solution(5,7));