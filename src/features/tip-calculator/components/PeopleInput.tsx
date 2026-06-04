import dollarIcon from "../../../assets/icon-dollar.svg";
import { TextField } from "../../../shared/components/TextField";

type PeopleInputProps = {
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

export function PeopleInput({ value, error, onChange }: PeopleInputProps) {
  return (
    <TextField
      id="people"
      label="People"
      value={value}
      icon={dollarIcon}
      error={error}
      onChange={onChange}
    />
  );
}