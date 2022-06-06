const solution = (numbers) => {
  let tmp = [];
  numbers.forEach((value, index) => {
    numbers.slice(index + 1, numbers.length).forEach((val2) => {
      tmp.push(value + val2);
    });
  });

  return [...new Set(tmp)].sort((a, b) => a - b);
};
