import React, { FC } from 'react';

import { ButtonHome } from 'atoms/buttons';
import { HomeAppBar } from 'molecules/appBar';
import { useStyle } from 'organisms/home/styled';

export const Home: FC = () => {
  const { home, homeText, textDistinction, buttonContainer, textWrapper } =
    useStyle();
  return (
    <div className={home}>
      <HomeAppBar />
      <div className={textWrapper}>
        <p className={homeText}>
          <span className={textDistinction}>Authorization</span> based for{' '}
          <span className={textDistinction}>JWT </span>token.
        </p>
        <p className={homeText}>
          Feel free to <span className={textDistinction}>try login</span> with
          fake user data.
        </p>
        <div className={buttonContainer}>
          <ButtonHome label="Just register" path="sign-up" />
          <p className={homeText}>or</p>
          <ButtonHome label="Sign In" path="sign-in" />
        </div>
      </div>
    </div>
  );
};
