const solution = (arr1, arr2) => {
    return arr1.map((val,i)=> val.map((val2, j) => val2 + arr2[i][j] ));

}
console.log(solution([[1,2], [2,3]], [[3,4],[5,6]]))