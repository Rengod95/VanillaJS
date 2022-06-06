const solution = (s) => {
    const tmpArr = [];
    for (let i = 0; i< +s; i++) i%2 === 0 ? tmpArr.push("수") : tmpArr.push("박");

    return tmpArr.join("");
}

console.log(solution(7))
