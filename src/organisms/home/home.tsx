import React, { FC } from 'react';

import { HomeAppBar } from 'molecules/homeAppBar';
import { Posts } from 'molecules/posts';

import { useStyle } from './styled';


export const Home: FC = () => {
  const { home } =
    useStyle();
  return (
    <div className={home}>
      <HomeAppBar />
      <Posts />
    </div>
  );
};
