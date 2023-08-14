export const formatPercentage = (value: number) => {
  if (value >= 0) return String(`+${value.toFixed(2)}%`);

  return String(`${value.toFixed(2)}%`);
};
