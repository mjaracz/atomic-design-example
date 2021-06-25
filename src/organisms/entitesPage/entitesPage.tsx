import React from 'react';
import { CustomAppBar } from 'molecules/appBar';
import { Entites } from 'molecules/entites';
import { useStyleHome } from 'organisms/home';
import { SideBar } from 'molecules/sideBar';

export const EntitesPage = () => {
  const styles = useStyleHome();

  return (
    <div className={styles.home}>
      <CustomAppBar />
      <div className={styles.contentWrapper}>
        <SideBar />
        <Entites />
      </div>
    </div>
  );
};
