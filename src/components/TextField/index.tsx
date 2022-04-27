import React, { InputHTMLAttributes, useId } from 'react';
import './index.css';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ className = '', label, ...props }) => {
  const id = useId();

  return (
    <>
      {label && (
        <label className="form-input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input id={props.id || id} className={`form-input ${className}`} {...props} />
    </>
  );
};
