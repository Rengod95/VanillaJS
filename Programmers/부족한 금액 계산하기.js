const solution = (price, money, count) => {
  const totalPrice = (price, count) => {
    return (count * (2 * price + (count - 1) * price)) / 2;
  };

  const calResult = (tmpPrice, money) =>
    money - tmpPrice > 0 ? 0 : Math.abs(money - tmpPrice);

  return calResult(totalPrice(price, count), money);
};
