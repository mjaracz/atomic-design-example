import React, { FC } from 'react';

import { useStyledPost } from './styled';


export interface Props {
  description: string;
  title: string;
}
export const Post: FC<Props> = ({ description, title }) => {
  const styles = useStyledPost();
  return (
    <div className={styles.postWrapper}>
      <div className={styles.textTitle}>{title}</div>
      <div className={styles.textDescription}>{description}</div>
    </div>
  );
};