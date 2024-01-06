const productExceptSelf = (nums) => {
  let n = nums.length;
  let results = Array(n).fill(1);

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] = results[i] * product;
    product = product * nums[i];
  }
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    results[j] = results[j] * product;
    product = product * nums[j];
  }

  return results;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
