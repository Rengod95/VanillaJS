const solution = (s) => {
    return s.split(" ").map(val =>val.split("").map((value,key) => key%2 === 0 ? value.toUpperCase() : value).join("")).join(" ");
}