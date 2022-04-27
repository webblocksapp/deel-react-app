import React, { HTMLAttributes } from 'react';
import './index.css';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = (props) => {
  return <div {...props} className={`content ${props.className}`} />;
};
Content.defaultProps = {
  style: {
    padding: 17,
  },
};
