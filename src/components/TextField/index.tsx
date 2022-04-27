import { Label } from '@components';
import React, { FormEventHandler, InputHTMLAttributes, useEffect, useId, useState } from 'react';
import './index.css';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ className, label, ...props }) => {
  const id = useId();
  const [value, setValue] = useState<string | number | readonly string[]>('');

  const onInput: FormEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.value);
    props.onInput && props.onInput(event);
  };

  useEffect(() => {
    setValue(props?.value);
  }, [props.value]);

  return (
    <>
      {label && (
        <Label className="form-label" htmlFor={id}>
          {label}
        </Label>
      )}
      <input {...props} value={value} onInput={onInput} id={props.id || id} className={`form-input ${className}`} />
    </>
  );
};
TextField.defaultProps = {
  className: '',
  value: '',
};
