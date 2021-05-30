import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { useStyledPosts } from './styled';

import { Post } from './post';
import { usePosts } from './usePosts';


export const Posts = () => {
  const styles = useStyledPosts();
  const { status, posts, error } = usePosts();

  return (
    <div className={styles.postsWrapper}>
      {(status === 'loading') 
        ? <CircularProgress/>
        : posts.map(post => {
          const postKey = `key:${post.id}`;
          return <Post description={post.body} key={postKey} title={post.title} />;
        })
      }
    </div>
  );
};
