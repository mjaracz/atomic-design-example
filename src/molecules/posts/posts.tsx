import React from 'react';

import { Post } from './post';
import { useStyledPosts } from './styled';

export const Posts = () => {
  const styles = useStyledPosts();
  return (
    <div className={styles.postsWrapper}>
      <Post description='description' title='title'  />
      <Post description='description1' title='title1' />
      <Post description='description2' title='title2' />
      <Post description='description3' title='title3' />
    </div>
  );
};
