import type { TipMode } from "../domain/types";

type TipSelectorProps = {
  options: readonly number[];
  selectedValue: string;
  selectedMode: TipMode;
  onChange: (mode: TipMode, value: string) => void;
};

export function TipSelector({
  options,
  selectedValue,
  selectedMode,
  onChange,
}: TipSelectorProps) {
  const customValue = selectedMode === "fixed" ? selectedValue : "";

  return (
    <div className="form__input">
      <p className="form__label">Select Tip %</p>

      <div className="form__options">
        {options.map((option) => {
          const value = String(option);

          return (
            <button
              key={option}
              type="button"
              className={
                selectedMode === "percent" && selectedValue === value
                  ? "active"
                  : ""
              }
              onClick={() => onChange("percent", value)}
            >
              {option}%
            </button>
          );
        })}

        <input
          type="number"
          value={customValue}
          placeholder="Custom"
          onChange={(event) => onChange("fixed", event.target.value)}
        />
      </div>
    </div>
  );
}
