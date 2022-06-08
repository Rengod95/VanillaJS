const solution = (fees, records) => {
  const carList = [];
  let feeList = [];
  const DEFAULT_TIME = fees[0];
  const DEFAULT_FEE = fees[1];
  const DEFAULT_OVERTIME = fees[2];
  const DEFAULT_OVER_FEE = fees[3];

  const DEFAULT_OUT_TIME = [23, 59];
  let newRecords = records.map((val) => val.split(" "));
  newRecords.forEach(
    (val) => (val[0] = val[0].split(":").map((e) => Number(e)))
  );
  newRecords.sort((a, b) => a[1] - b[1]);

  newRecords.map((val, idx) => {
    if (idx === 0) carList.push(val[1]);
    if (idx !== 0) {
      val[1] !== newRecords[idx - 1][1] ? carList.push(val[1]) : 0;
    }
  });
  for (let j = 0; j < carList.length; j++) {
    let tmp = [];
    let reduceTime = 0;
    let tmpH = 0;
    let tmpM = 0;

    newRecords.forEach((val) => (val[1] === carList[j] ? tmp.push(val) : 0));
    console.log(tmp);
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i][2] === "OUT") {
        continue;
      } else {
        // in에 대해서만
        if (i === tmp.length - 1) {
          // out이 하나 없으면
          if (
            tmp[i][0][0] < DEFAULT_OUT_TIME[0] &&
            tmp[i][0][1] > DEFAULT_OUT_TIME[1]
          ) {
            tmpH = Math.abs(tmp[i][0][0] - DEFAULT_OUT_TIME[0]) - 1;
            tmpM = 60 - Math.abs(tmp[i][0][1] - DEFAULT_OUT_TIME[1]);
            console.log(tmpH, tmpM, j, i);
          } else {
            tmpH = Math.abs(tmp[i][0][0] - DEFAULT_OUT_TIME[0]);
            tmpM = Math.abs(tmp[i][0][1] - DEFAULT_OUT_TIME[1]);
            console.log(tmpH, tmpM, j, i);
          }
        } else {
          // 짝수로 맞아 떨어지면
          if (
            tmp[i][0][0] < tmp[i + 1][0][0] &&
            tmp[i][0][1] > tmp[i + 1][0][1]
          ) {
            tmpH = Math.abs(tmp[i][0][0] - tmp[i + 1][0][0]) - 1;
            tmpM = 60 - Math.abs(tmp[i][0][1] - tmp[i + 1][0][1]);
            console.log(tmpH, tmpM, j, i);
          } else {
            tmpH = Math.abs(tmp[i][0][0] - tmp[i + 1][0][0]);
            tmpM = Math.abs(tmp[i][0][1] - tmp[i + 1][0][1]);
            console.log(tmpH, tmpM, j, i);
          }
        }
      }
      reduceTime += tmpH * 60 + tmpM;
    }

    feeList.push(reduceTime);
  }

  feeList = feeList.map((val) => {
    if (val > DEFAULT_TIME) {
      return (
        DEFAULT_FEE +
        Math.ceil((val - DEFAULT_TIME) / DEFAULT_OVERTIME) * DEFAULT_OVER_FEE
      );
    } else if (val <= DEFAULT_TIME) {
      return DEFAULT_FEE;
    }
  });

  console.log(feeList);
  return feeList;
};

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
