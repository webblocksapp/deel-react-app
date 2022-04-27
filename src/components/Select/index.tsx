import React, { SelectHTMLAttributes, useEffect, useState, ChangeEventHandler, useId } from 'react';
import { SelectOption } from '@interfaces';
import './index.css';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
  const id = useId();
  const [value, setValue] = useState<string | number | readonly string[]>();

  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event);
  };

  useEffect(() => {
    setValue(props?.value);
  }, [props.value]);

  return (
    <>
      {label && (
        <label className="form-select-label" htmlFor={id}>
          {label}
        </label>
      )}
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
