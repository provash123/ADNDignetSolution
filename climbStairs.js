let climbStairs = (n, count = 0, memory = []) => {
  if (count > n) {
    return 0;
  }

  if (count === n) {
    return 1;
  }

  if (memory[count] > 0) {
    return memory[count];
  }

  memory[count] =
    climbStairs(n, count + 1, memory) + climbStairs(n, count + 2, memory);

  return memory[count];
};

console.log(climbStairs(5));
