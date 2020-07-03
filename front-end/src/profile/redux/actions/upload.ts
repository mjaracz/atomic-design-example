export const postUpload = (file: FormData) => ({
  type: 'POST_UPLOAD',
  file,
})

export const clearUpload = () => ({
  type: 'CLEAR_UPLOAD',
})
