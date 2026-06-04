type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  icon?: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function TextField({
  id,
  label,
  value,
  icon,
  error,
  placeholder,
  onChange,
}: TextFieldProps) {
  const stateClass = error ? "invalid" : value ? "valid" : "";

  return (
    <div className={`form__input ${stateClass}`}>
      <p className="form__label">
        <span>{label}</span>
        {error && <span className="error">{error}</span>}
      </p>

      {icon && <img src={icon} alt="" className="form__icon" />}

      <input
        id={id}
        type="number"
        value={value}
        placeholder={placeholder ?? label}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}