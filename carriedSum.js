function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!

// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30

function curriedSum(num) {
  const numbers = [];

  function _curriedSum(arg) {
    numbers.push(arg);

    if (numbers.length === num) {
      return numbers.reduce((acc, currentNum) => acc + currentNum);
    } else {
      return _curriedSum
    }
  }

  return _curriedSum
}

// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56
// console.log(sum(5)(30)(20)(1))

Function.prototype.curry = function (numArgs) {
    const originalFunc = this
    const args = [];

    function _curryfunc(arg) {
        args.push(arg)

        if (args.length === numArgs) {
            return originalFunc(...args);
          } else {
            return _curryfunc
          }
    }
        return _curryfunc
}

function add(str1, str2, str3) {
    return str1+ str2+ str3
}

const curried_add = add.curry(3)
console.log(curried_add("a"))
console.log(curried_add("c"))
console.log(curried_add("e"))