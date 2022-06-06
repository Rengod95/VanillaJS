const solution = (s, n) =>{
    return s.split("").map(value => {
        if (value === " ") return value;
        return value.toUpperCase().charCodeAt(0) + n > 90
            ? String.fromCharCode(value.charCodeAt(0) + n - 26)
            : String.fromCharCode(value.charCodeAt(0) + n)
    }).join("");
}

console.log(solution('A B',1))