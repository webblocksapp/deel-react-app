import React, { HTMLAttributes } from 'react';
import './index.css';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({ className, ...props }) => {
  return <div {...props} className={`content ${className}`} />;
};
Content.defaultProps = {
  style: {
    padding: 17,
  },
};
