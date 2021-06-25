import React from 'react';
import { useStylePosts } from 'molecules/posts';
import { CircularProgress } from '@material-ui/core';
import { usePosts } from '../posts/usePosts';


export const Entites = () => {
  const styles = useStylePosts();
  const { status, posts } = usePosts();
  console.log(posts);
  return (
    <div className={styles.postsWrapper}>
      {
        (status === 'loading') || (status === 'idle')
          ? <CircularProgress />
          : null
      }
    </div>
  );
};
