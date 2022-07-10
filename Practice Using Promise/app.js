window.onload = function () {
  let promiseCount = 0;
  const promiseList = document.querySelector("#promiseList");
  const createPromise = document.querySelector("#createPromise");

  const tmpPromise = function (thisPromiseCount) {
    return new Promise((resolve, reject) => {
      let delayCount = Math.random() * 2000 + 1000;
      if (delayCount < 3000) {
        setTimeout(function () {
          promiseList.insertAdjacentHTML(
            "beforeend",
            `<div>${thisPromiseCount}번 째 비동기 프로세스 생성</div>`
          );
          resolve(thisPromiseCount);
        }, delayCount);
      } else {
        reject(delayCount);
      }
    });
  };

  const aPromise = async function (count) {
    try {
      let promiseData = tmpPromise(count);
      promiseData
        .then((res) => {
          promiseList.insertAdjacentHTML(
            "beforeend",
            `<div> ${res}번 째 동기 프로세스 생성</div>`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const buttonHandler = function () {
    let thisPromiseCount = ++promiseCount;
    promiseList.insertAdjacentHTML(
      "beforeend",
      `<div> ${thisPromiseCount}번 째 동기 프로세스 생성</div>`
    );

    aPromise(thisPromiseCount);

    promiseList.insertAdjacentHTML(
      "beforeend",
      `<div>${thisPromiseCount}번 째 동기 프로세스 이행</div>`
    );
  };

  createPromise.addEventListener("click", buttonHandler);
};
