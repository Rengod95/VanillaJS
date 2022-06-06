const solution = (numbers, hand) => {
  let leftThumbPos = undefined;
  let rightThumbPos = undefined;
  const resultMoves = [];

  let keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  leftThumbPos = [3, 0];
  rightThumbPos = [3, 2];
  console.log(leftThumbPos, rightThumbPos);
  console.log(keyPad);

  const getThumbDistance = (left, right, toMoveNum) => {
    // 어느 손을 써야하는지 반환 string

    const movePos = keyPad[toMoveNum];
    const leftPos = keyPad[left];
    const rightPos = keyPad[right];
    const leftDistance =
      Math.abs(movePos[0] - leftPos[0]) + Math.abs(movePos[1] - leftPos[1]);
    const rightDistance =
      Math.abs(movePos[0] - rightPos[0]) + Math.abs(movePos[1] - rightPos[1]);

    console.log(leftPos);
    console.log(rightPos);
    if (leftDistance < rightDistance) {
      leftThumbPos = toMoveNum;
      return "left";
    } else if (leftDistance > rightDistance) {
      rightThumbPos = toMoveNum;
      return "right";
    } else if (leftDistance === rightDistance) {
      if (hand === "left") {
        leftThumbPos = toMoveNum;
        return "left";
      } else if (hand === "right") {
        rightThumbPos = toMoveNum;
        return "right";
      }
    }
  };

  numbers.forEach((val, idx) => {
    //순서 삽입
    if (keyPad[val][1] === 0) {
      // 1,4,7
      resultMoves.push("L");
      leftThumbPos = val;
      return;
    } else if (keyPad[val][1] === 2) {
      // 3,6,9
      resultMoves.push("R");
      rightThumbPos = val;
      return;
    } else {
      if (getThumbDistance(leftThumbPos, rightThumbPos, val) === "left") {
        resultMoves.push("L");
        return;
      } else if (
        getThumbDistance(leftThumbPos, rightThumbPos, val) === "right"
      ) {
        resultMoves.push("R");
        return;
      }
    }
  });

  return resultMoves.join("");
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
