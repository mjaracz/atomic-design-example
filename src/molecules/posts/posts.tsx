import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { useStylePosts } from './useStyles';

import { Post } from './post';
import { usePosts } from './usePosts';


export const Posts = () => {
  const styles = useStylePosts();
  const { status, posts } = usePosts();

  return (
    <div className={styles.postsWrapper}>
      {(status === 'loading') || (status === 'idle') 
        ? <CircularProgress className={styles.circleLoading} size={120} />
        : posts.map(post => {
          const postKey = `key:${post.id}`;
          return <Post description={post.body} key={postKey} title={post.title} />;
        })
      }
    </div>
  );
};
