export type TipMode = "percent" | "fixed";

export type TipCalculatorValues = {
  bill: string;
  tipValue: string;
  tipMode: TipMode;
  peopleCount: string;
};

export type TipCalculatorErrors = {
  bill?: string;
  tipValue?: string;
  peopleCount?: string;
};

export type TipCalculationInput = {
  bill: number;
  tipValue: number;
  tipMode: TipMode;
  peopleCount: number;
};

export type TipCalculationResult = {
  tipPerPerson: number;
  totalPerPerson: number;
};