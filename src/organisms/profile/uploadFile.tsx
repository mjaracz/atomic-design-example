import React, { FC, ReactElement } from 'react';

import { CircularProgress } from '@material-ui/core';

import { ReactComponent as IconUpload } from '../../assets/upload.svg';
import { useStyle } from './styled';
import { UploadProps } from './types';

export const UploadFile: FC<UploadProps> = ({ onChangeUpload, upload }) => {
  const { uploadForm, uploadContainer, profileText } = useStyle();
  
  function wrapElement(wrappedElement: ReactElement): ReactElement {
    return (
      <div className={uploadContainer}>
        { wrappedElement }
      </div>
    );
  }
  
  if (upload.loading) {
    return wrapElement(<CircularProgress color="secondary" size={42} />);
  }
  if (upload.file) {
    return wrapElement(
      <p className={profileText}>
        file was <span style={{ color: '#bc36ff' }}>successful </span>
        uploaded
      </p>
    );
  }
  
  return wrapElement(
    <>
      <input
        className={uploadForm}
        id="file"
        name="file"
        onChange={onChangeUpload}
        type="file"
      />
      <label htmlFor="file">
        <IconUpload />
        <input type="file" value='Choose SVG file&hellip;'/>
      </label>
    </>
  );
};
