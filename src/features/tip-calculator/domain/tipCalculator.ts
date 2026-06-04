import type { TipCalculationInput, TipCalculationResult } from "./types";

export function calculateTip({
  bill,
  tipValue,
  tipMode,
  peopleCount,
}: TipCalculationInput): TipCalculationResult {
  if (bill <= 0 || tipValue < 0 || peopleCount <= 0) {
    return {
      tipPerPerson: 0,
      totalPerPerson: 0,
    };
  }

  const tipTotal =
    tipMode === "percent"
      ? bill * (tipValue / 100)
      : tipValue;

  return {
    tipPerPerson: tipTotal / peopleCount,
    totalPerPerson: (bill + tipTotal) / peopleCount,
  };
}