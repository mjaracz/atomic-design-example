import React, { FC } from 'react';

import { useStylePost } from './useStyles';


export interface Props {
  description: string;
  title: string;
}
export const Post: FC<Props> = ({ description, title }) => {
  const styles = useStylePost();
  return (
    <div className={styles.postWrapper}>
      <div className={styles.textTitle}>{title}</div>
      <div className={styles.textDescription}>{description}</div>
    </div>
  );
};