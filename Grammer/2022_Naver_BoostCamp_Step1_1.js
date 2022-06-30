const test = function (word) {
  let keyboard = Object.assign({}, keyboard);
  let tword = tword.split();
  let pos1 = [-1, -1];
  let pos2 = [-1, -1];
  let result = [0, 0];
  let isIn = false;
  for (let i = 0; i < tword.length; i++) {
    keyboard.forEach((val, row) => {
      val.forEach((val2, col) => {
        if (val2 === tword[i]) {
          if (pos1[1] === -1) {
            if (val < pos1[0] && val2 < pos1[1]) {
              pos1.push(row, col);
            }
          } else {
            if (val < pos2[0] && val2 < pos2[1]) pos2.push(row, col);
            result[0] += Math.abs(pos1[0] - pos2[0]);
            result[0] += Math.abs(pos1[1] - pos2[1]);
            result[1] += 1;
            pos2 = [-1, -1];
            pos1 = [-1, -1];
          }
        } else {
          result[0] += 20;
          result[1] += 1;
        }
      });
    });
  }
};
