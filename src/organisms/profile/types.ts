import { ChangeEvent } from 'react';

import { UploadState } from './redux/types';

export interface UploadProps {
  onChangeUpload: (event: ChangeEvent<HTMLInputElement>) => void
  upload: UploadState
}
