const solution = (n) => {
    return n.toString().split("").map(val=> parseInt(val)).reduce((sum, cur)=> sum+cur);
}