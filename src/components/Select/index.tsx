import React, {
  SelectHTMLAttributes,
  useEffect,
  useState,
  ChangeEventHandler,
} from 'react';
import { SelectOption } from '@interfaces';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  const [value, setValue] = useState<string | number | readonly string[]>();

  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  };

  useEffect(() => {
    setValue(props?.value);
  }, [props.value]);

  return (
    <select
      {...props}
      value={value}
      onChange={onChange}
      className={`form-select ${props.className}`}
    >
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
