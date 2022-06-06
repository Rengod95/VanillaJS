const solution = (s) => {
    const checkLen = (s) =>{
        return s.length === 4 || s.length === 6;
    }

    const checkNotNumber = (s) => {
        let newS =parseInt(s).toString();
        return newS === s
    };

    return checkLen(s) ? checkNotNumber(s) : false;

}

console.log(solution("123a"))