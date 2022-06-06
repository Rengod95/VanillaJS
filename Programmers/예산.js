const solution = (d, budget) => {
  let count = 0;
  d = d.sort((a, b) => a - b);

  const calculate = (budget) => {
    d.forEach((val) => {
      if (budget - val >= 0) {
        budget -= val;
        count++;
      }
    });
  };
  calculate(budget);
  console.log(count);
  return count;
};

solution([1, 3, 2, 5, 4], 9);
