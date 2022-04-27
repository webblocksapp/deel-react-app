import React, { ReactNode } from 'react';
import './index.css';

export interface HeaderProps {
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return <header>{props.children}</header>;
};
