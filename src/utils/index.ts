export const getRandomDigit = (): number => {
  const randomDecimal = Math.random();
  return Math.floor(randomDecimal * 3);
};
