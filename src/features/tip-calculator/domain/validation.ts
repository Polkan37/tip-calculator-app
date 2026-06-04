import type { TipCalculatorErrors, TipCalculatorValues } from "./types";
import { parseNumberInput } from "../../../shared/utils/parseNumberInput";

export function validateTipCalculator(
  values: TipCalculatorValues,
): TipCalculatorErrors {
  const errors: TipCalculatorErrors = {};
  const bill = parseNumberInput(values.bill);
  const tipValue = parseNumberInput(values.tipValue);
  const peopleCount = parseNumberInput(values.peopleCount);

  if (values.bill && bill < 0) {
    errors.bill = "Can't be negative";
  }

  if (values.tipValue && tipValue < 0) {
    errors.tipValue = "Can't be negative";
  }

  if (values.peopleCount && peopleCount <= 0) {
    errors.peopleCount = "Can't be zero";
  }

  return errors;
}
