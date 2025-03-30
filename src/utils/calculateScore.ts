export const calculateScore = (
  textLength: number,
  errors: number,
  timeInSeconds: number
): number => {
  const accuracyWeight = 0.7;
  const speedWeight = 0.3;

  const accuracy = Math.max(0, (textLength - errors) / textLength) * 100;
  const words = textLength / 5;
  const minutes = timeInSeconds / 60;
  const wpm = minutes > 0 ? words / minutes : 0;
  const normalizedSpeed = Math.min(wpm, 200) / 2;

  const score = (accuracy * accuracyWeight) + (normalizedSpeed * speedWeight);
  return Math.round(Math.min(score, 100));
};