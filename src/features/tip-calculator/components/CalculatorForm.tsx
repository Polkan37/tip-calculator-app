import { TIP_OPTIONS } from "../config/tipOptions";
import type { TipCalculatorErrors, TipCalculatorValues } from "../domain/types";
import { BillInput } from "./BillInput";
import { PeopleInput } from "./PeopleInput";
import { TipSelector } from "./TipSelector";

type CalculatorFormProps = {
  values: TipCalculatorValues;
  errors: TipCalculatorErrors;
  onChange: (name: keyof TipCalculatorValues, value: string) => void;
};

export function CalculatorForm({
  values,
  errors,
  onChange,
}: CalculatorFormProps) {
  return (
    <form className="form">
      <BillInput
        value={values.bill}
        error={errors.bill}
        onChange={(value) => onChange("bill", value)}
      />

      <TipSelector
        options={TIP_OPTIONS}
        selectedValue={values.tipValue}
        selectedMode={values.tipMode}
        onChange={(mode, value) => {
            onChange("tipMode", mode);
            onChange("tipValue", value);
        }}
      />

      <PeopleInput
        value={values.peopleCount}
        error={errors.peopleCount}
        onChange={(value) => onChange("peopleCount", value)}
      />
    </form>
  );
}