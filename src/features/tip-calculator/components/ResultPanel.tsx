type ResultPanelProps = {
  tipPerPerson: string;
  totalPerPerson: string;
  canReset: boolean;
  onReset: () => void;
};

export function ResultPanel({
  tipPerPerson,
  totalPerPerson,
  canReset,
  onReset,
}: ResultPanelProps) {
  return (
    <div className="receipt">
      <div className="receipt__text">
        <div className="receipt__field">
          <div className="receipt__title">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <span className="receipt__value">{tipPerPerson}</span>
        </div>

        <div className="receipt__field">
          <div className="receipt__title">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <span className="receipt__value">{totalPerPerson}</span>
        </div>
      </div>

      <div className="receipt__buttons">
        <button
          type="button"
          disabled={!canReset}
          onClick={onReset}
          className={canReset ? "button button--active" : "button"}
        >
          Reset
        </button>
      </div>
    </div>
  );
}