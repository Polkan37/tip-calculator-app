import { CalculatorForm } from "./components/CalculatorForm";
import { ResultPanel } from "./components/ResultPanel";
import { useTipCalculator } from "./hooks/useTipCalculator";

export function TipCalculator() {
  const { values, errors, result, canReset, updateValue, reset } =
    useTipCalculator();

  return (
    <section className="calculator">
      <CalculatorForm
        values={values}
        errors={errors}
        onChange={updateValue}
      />

      <ResultPanel
        tipPerPerson={result.tipPerPerson}
        totalPerPerson={result.totalPerPerson}
        canReset={canReset}
        onReset={reset}
      />
    </section>
  );
}