import React, { LabelHTMLAttributes } from 'react';
import './index.css';

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<FormLabelProps> = ({ className, ...props }) => {
  return <label {...props} className={`form-label ${className}`} />;
};
Label.defaultProps = {
  className: '',
};
