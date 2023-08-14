import { useCallback, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5em;
`;

type Props = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: Props) => {
  const [state, setState] = useState(checked ?? false);

  const onChangeInternal = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.currentTarget.checked;
      setState(checked);

      if (onChange) onChange(checked);
    },
    [onChange],
  );

  return (
    <Label>
      <Input checked={state} onChange={onChangeInternal} />
      {label}
    </Label>
  );
};

export { Checkbox };
