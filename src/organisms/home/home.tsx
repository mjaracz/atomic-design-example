import React, { FC } from 'react';

import { HomeAppBar } from 'molecules/appBar';
import { useStyle } from 'organisms/home/styled';

export const Home: FC = () => {
  const { home } =
    useStyle();
  return (
    <div className={home}>
      <HomeAppBar />
    </div>
  );
};
