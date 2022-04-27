import React, { SelectHTMLAttributes, useEffect, useState, ChangeEventHandler, useId } from 'react';
import './index.css';
import { SelectOption } from '@interfaces';
import { Label } from '@components';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className, ...props }) => {
  const id = useId();
  const [value, setValue] = useState<string | number | readonly string[]>('');

  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  };

  useEffect(() => {
    setValue(props?.value);
  }, [props.value]);

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select {...props} value={value} onChange={onChange} className={`form-select ${className}`}>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
Select.defaultProps = {
  className: '',
  value: '',
};
