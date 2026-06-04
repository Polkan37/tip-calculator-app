import dollarIcon from "../../../assets/icon-dollar.svg";
import { TextField } from "../../../shared/components/TextField";

type BillInputProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function BillInput({ value, error, onChange }: BillInputProps) {
  return (
    <TextField
      id="bill"
      label="Bill"
      value={value}
      icon={dollarIcon}
      error={error}
      onChange={onChange}
    />
  );
}