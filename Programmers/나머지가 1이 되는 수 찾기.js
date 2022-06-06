const solution = (n) => {
  const tmp = [];
  for (let i = 1; i <= n; i++) n % i === 1 ? tmp.push(i) : 0;
  return Math.min(...tmp);
};
