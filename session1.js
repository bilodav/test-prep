function numberAnalyzer(num) {
  const result = [];

  for (let i = 1; i <= num; i++) {
    // Loop starting at 1 as per brief
    const fizzObj = {
      number: null,
      label: null,
    }; //defining my shape here
    if (i % 2 === 0 && i % 3 === 0) {
      //Check first to not exit if/else early for later conditions
      fizzObj.label = "EvenFizz";
      fizzObj.number = i;
      result.push(fizzObj);
    } else if (i % 2 === 0) {
      fizzObj.label = "Even";
      fizzObj.number = i;
      result.push(fizzObj);
    } else if (i % 3 === 0) {
      fizzObj.label = "Fizz";
      fizzObj.number = i;
      result.push(fizzObj);
    } else {
      fizzObj.label = "Other";
      fizzObj.number = i;
      result.push(fizzObj);
    }
  }
  return {
    //return object to call methods on
    result, // Shorthand return result
    getTotal() {
      return this.result.reduce((acc, curr) => {
        return acc + curr.number;
      }, 0); // basic reduce for summing up
    },
    getFizzNumbers() {
      return this.result
        .filter((item) => item.label === "Fizz" || item.label === "EvenFizz")
        .map((item) => item.number);
    }, // first filter then map out the numbers to an arr

    getSummary() {
      return this.result.reduce((acc, curr) => {
        acc[curr.label] = (acc[curr.label] || 0) + 1; // create obj property by using the current values label if doest exist then add 0 or add 1 to existing
        return acc;
      }, {});
    },
  };
}

console.log(numberAnalyzer(5).getSummary());

const analyzed5 = numberAnalyzer(5);

console.log(analyzed5.getFizzNumbers());
