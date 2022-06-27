const hasProp = (obj) => {
  for (let key in obj) {
    return true;
  }
  return false;
};

const sumPropValue = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") sum += obj[key];
  }
  return sum;
};

let salaries = {
  In: "dasd",
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log(sumPropValue(salaries));

let schedule = {};
console.log(hasProp(schedule));
schedule["8:30"] = "get up";
console.log(hasProp(schedule));
