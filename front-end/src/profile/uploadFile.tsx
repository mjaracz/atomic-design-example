import React, { FC } from 'react'
import { useStyle } from './styled'
import { ReactComponent as IconUpload } from '../assets/upload.svg'
import { UploadProps } from './types'
import { CircularProgress } from '@material-ui/core'

export const UploadFile: FC<UploadProps> = ({
  onChangeUpload,
  upload,
}) => {
  const { uploadForm, uploadContainer, profileText } = useStyle()
  return (
    <div className={uploadContainer}>
      {upload.loading ? (
        <CircularProgress color="secondary" size={42} />
      ) : upload.file ? (
        <p className={profileText}>file was <span style={{color: '#bc36ff'}}> successful </span>uploaded</p>
      ) : (
        <>
          <input
            type="file"
            name="file"
            id="file"
            className={uploadForm}
            onChange={onChangeUpload}
          />
          <label htmlFor="file">
            <IconUpload />
            <span>Choose SVG file&hellip;</span>
          </label>
        </>
      )}
    </div>
  )
}
