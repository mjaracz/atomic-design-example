import React, { FC } from 'react';
import { UserCard } from 'molecules/userCard';
import { useStyles } from './useStyles';

export const SideBar: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.sideBar}>
      <UserCard />
    </div>
  );
};
