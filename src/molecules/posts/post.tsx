import React from 'react';

import { useStyledPost } from './styled';

export const Post = ({ description, title }) => {
  const styles = useStyledPost();
  return (
    <div className={styles.postWrapper}>
      <div className={styles.textWrapper}>{title}</div>
      <div className={styles.textWrapper}>{description}</div>
    </div>
  );
};