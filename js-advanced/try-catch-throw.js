const addTwoNumbers = (a, b) => {
  if (typeof a !== "number") {
    throw new Error("a is not number");
  }
  if (typeof b !== "number") {
    throw new Error("b is not number");
  }
  return a + b;
};

try {
  console.log(addTwoNumbers(null, 2));
} catch (error) {
  console.log("Invalid number inputs");
}
