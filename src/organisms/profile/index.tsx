import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { ButtonHome } from 'atoms/buttons';

import { useProfile } from './hooks/useProfile';
import { useStyle } from './styled';
import { UploadFile } from './uploadFile';

export const Profile: FC = () => {
  const { userProfile, jwtToken, onChangeUpload, upload } = useProfile();
  const { profile, profileText } = useStyle();

  if (userProfile.error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="unauthorized" />;
  }
  return userProfile.loading ? (
    <CircularProgress color="secondary" size={114} />
  ) : (
    <div className={profile}>
      <p className={profileText}>
        Profile{' '}
        <b style={{ color: '#bc36ff' }}>{userProfile.profile.username}</b>, with
        id <b style={{ color: '#bc36ff' }}>{userProfile.profile.userId}</b>
      </p>
      <ButtonHome label="Products" path="/products" />
      <UploadFile onChangeUpload={onChangeUpload} upload={upload} />
      <ButtonHome label="sign in again" path="/sign-in" />
    </div>
  );
};
