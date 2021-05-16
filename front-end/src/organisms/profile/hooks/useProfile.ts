import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUpload } from '../redux/actions'
import { RootState } from '../../../redux/types'

export const useProfile = () => {
  const { userProfile, signIn: { jwtToken }, upload } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  

  const onChangeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    formData.append('file', event.target.files[0])
    dispatch(postUpload(formData))
  }
  return {
    userProfile,
    jwtToken,
    onChangeUpload,
    upload,
  }
}
