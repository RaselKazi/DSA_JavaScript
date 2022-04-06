const powFaster = (base, exponent) => {
  if (exponent < 2) {
    // explanation below - 1
    return base && ([1, base][exponent] || powFaster(1 / base, -exponent));
  }

  if (exponent & 1) {
    // if the existing exponent is odd
    return base * powFaster(base * base, exponent >> 1); // explanation below - 2
  }

  return powFaster(base * base, exponent / 2);
};
