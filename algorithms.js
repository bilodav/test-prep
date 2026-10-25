function fibonacci(n) {
  let arr = [0, 1];
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return arr[n - 1];
  } else if (n === 2) {
    return arr;
  }

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

console.log(fibonacci(6));

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5)); //120

function isPrime(n) {
  if (n < 2) return false;

  for (let count = 2; count < n; count++) {
    for (let i = 2; i < n; i++) {
      if (count * i === n) return false;
    }
  }

  return true;
}

// console.log(isPrime(1)); //false
// console.log(isPrime(5)); //true
// console.log(isPrime(4)); //false
// console.log(isPrime(7)); //true

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  let check = 1;
  let count = 0;
  while (check <= num) {
    if (check === num) {
      return true;
    }
    count++;
    check = 2 ** count;
  }

  return false;
}

// console.log(isPowerOfTwo(8));

function recursiveFibbo(num) {
  if (num < 2) {
    return num;
  }

  return recursiveFibbo(num - 1) + recursiveFibbo(num - 2);
}

console.log(recursiveFibbo(0)); //0
console.log(recursiveFibbo(1)); // 1
console.log(recursiveFibbo(6)); // 8
