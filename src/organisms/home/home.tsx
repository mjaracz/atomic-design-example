import React, { FC } from 'react';

import { CustomAppBar } from 'molecules/appBar';
import { Posts } from 'molecules/posts';
import { useStyle } from './useStyles';
import { SideBar } from '../../molecules/sideBar';


export const Home: FC = () => {
  const styles =
    useStyle();
  return (
    <div className={styles.home}>
      <CustomAppBar />
      <div className={styles.contentWrapper}>
        <SideBar />
        <Posts />
      </div>
    </div>
  );
};
