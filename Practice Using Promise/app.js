window.onload = function () {
  let promiseCount = 0;
  const promiseList = document.querySelector("#promiseList");
  const createPromise = document.querySelector("#createPromise");

  const buttonHandler = function () {
    let thisPromiseCount = ++promiseCount;
    promiseList.insertAdjacentHTML(
      "beforeend",
      `<div> ${thisPromiseCount}번 째 동기 프로세스 생성</div>`
    );
    const tmpPromise = new Promise((resolve, reject) => {
      setTimeout(function () {
        promiseList.insertAdjacentHTML(
          "beforeend",
          `<div>${thisPromiseCount}번 째 비동기 프로세스 생성</div>`
        );
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
    })
      .then((res) => {
        promiseList.insertAdjacentHTML(
          "beforeend",
          `<div>${res}번 째 비동기 프로세스 이행</div>`
        );
      })
      .catch((error) => {
        promiseList.insertAdjacentHTML("beforeend", error + "에러 발생");
      });

    promiseList.insertAdjacentHTML(
      "beforeend",
      `<div>${thisPromiseCount}번 째 동기 프로세스 이행</div>`
    );
  };

  createPromise.addEventListener("click", buttonHandler);
};
