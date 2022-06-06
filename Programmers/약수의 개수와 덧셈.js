const solution = (left,right) => {
    let sum = 0;

    for(let i = left; i<=right; i++){
        sum += Number.isInteger(Math.sqrt(i)) ?  -i :+i ;
    }

    return sum;
}

console.log(solution(13,17));