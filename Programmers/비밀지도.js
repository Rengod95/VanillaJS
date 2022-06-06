const solution = (n, arr1, arr2) => {
  const arrChanger = (arr1, arr2) => {
    return arr1.map((val, idx) => {
      return (val | arr2[idx]).toString(2);
    });
  };

  const insertWall = (changedArr) => {
    let tmp = changedArr.map((value) =>
      value.split("").map((val) => {
        return val === "1" ? "#" : " ";
      })
    );

    tmp = tmp.map((val) => {
      if (val.length < n) {
        let t = [];
        for (let i = val.length; i < n; i++) {
          t.push(" ");
        }
        return [...t, ...val].join("");
      }
      return val.join("");
    });

    return tmp;
  };

  return insertWall(arrChanger(arr1, arr2));
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
