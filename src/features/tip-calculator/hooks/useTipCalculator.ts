import { useMemo, useState } from "react";
import { parseNumberInput } from "../../../shared/utils/parseNumberInput";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { calculateTip } from "../domain/tipCalculator";
import { validateTipCalculator } from "../domain/validation";
import type { TipCalculatorValues } from "../domain/types";

const initialValues: TipCalculatorValues = {
  bill: "",
  tipValue: "",
  tipMode: "percent",
  peopleCount: "",
};

export function useTipCalculator() {
  const [values, setValues] = useState<TipCalculatorValues>(initialValues);

  const errors = useMemo(() => validateTipCalculator(values), [values]);
  const hasErrors = Object.values(errors).some(Boolean);

  const result = useMemo(() => {
    return calculateTip({
      bill: parseNumberInput(values.bill),
      tipValue: parseNumberInput(values.tipValue),
      tipMode: values.tipMode,
      peopleCount: parseNumberInput(values.peopleCount),
    });
  }, [values]);

  const updateValue = <Field extends keyof TipCalculatorValues>(
    name: Field,
    value: TipCalculatorValues[Field],
  ) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  const canReset = Object.values(values).some(Boolean);

  return {
    values,
    errors,
    result: {
      tipPerPerson: formatCurrency(result.tipPerPerson),
      totalPerPerson: formatCurrency(result.totalPerPerson),
    },
    hasErrors,
    canReset,
    updateValue,
    reset,
  };
}
