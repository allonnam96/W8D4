function sum(...args) {
    return args.reduce((acc, currentNum) => acc + currentNum);
  }
  
  console.log(sum(10,5,2))