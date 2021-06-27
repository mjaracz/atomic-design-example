import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { usePosts } from '../posts/usePosts';
import { EntitiesCard } from './entitiesCard';
import { useStyle } from './useStyle';

export const Entites = () => {
  const styles = useStyle();
  const { status, posts } = usePosts();

  return (
    <div className={styles.listWrapper}>
      <h1 className={styles.entitiesTitile}>
        Entities
      </h1>
      {
        (status === 'loading') || (status === 'idle')
          ? <CircularProgress size={120} />
          : posts.map((post, index) => {
            const keyIndex = `key${index}`;
            return <EntitiesCard 
              description={post.body} 
              key={keyIndex}
              title={post.title} 
            />;
          })
      }
    </div>
  );
};
