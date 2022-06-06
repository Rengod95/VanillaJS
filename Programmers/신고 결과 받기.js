const solution = (id_list, report, k) => {
  let result = new Array(id_list.length).fill(0); // 내가 신고 -> 정지 몇명
  let alarm = new Array(id_list.length).fill(0); // 알람 보낼 횟수
  let isOver = false; // k넘니 안넘니
  let newResult = []; /// 정지당한 사람들

  report = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  report.forEach((val, idx) => {
    for (let i = 0; i < id_list.length; i++) {
      if (val[1] === id_list[i]) result[i] += 1;
    }
  });

  result.forEach((val, idx) => {
    if (val >= k) {
      isOver = true;
      newResult.push(id_list[idx]);
    }
  });

  if (isOver) {
    for (let i = 0; i < newResult.length; i++) {
      report.forEach((val, idx) => {
        if (val[1] === newResult[i]) {
          alarm[id_list.findIndex((el) => val[0] === el)] += 1;
        }
      });
    }
  } else if (!isOver) {
    return alarm;
  }
  return alarm;
};

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
