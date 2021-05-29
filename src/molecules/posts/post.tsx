import React from 'react';

import { useStyledPost } from './styled';

export const Post = ({ description, title }) => {
  const styles = useStyledPost();
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};