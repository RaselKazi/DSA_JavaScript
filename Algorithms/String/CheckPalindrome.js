// Palindrome check is case sensitive; i.e. Aba is not a palindrome

const checkPalindrome = (str) => {
  // check that input is a string
  if (typeof str !== "string") {
    return "Not a string";
  }
  if (str.length === 0) {
    return "Empty string";
  }
  const reversed = [...str].reverse().join("");
  return str === reversed ? "Palindrome" : "Not a Palindrome";
};
