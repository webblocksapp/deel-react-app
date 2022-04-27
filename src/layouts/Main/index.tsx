import { Header, Toolbar, Content } from '@components';
import React, { ReactNode } from 'react';
import './index.css';

export interface MainProps {
  children?: ReactNode;
}

export const Main: React.FC<MainProps> = (props) => {
  return (
    <>
      <Header>
        <Toolbar />
      </Header>
      <Content>{props.children}</Content>
    </>
  );
};
