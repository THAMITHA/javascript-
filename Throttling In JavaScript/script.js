const expensive = function () {
  console.log("expensive");
};

const doSomeMagic = function (func, limit) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterFunction = doSomeMagic(expensive, 1000);
