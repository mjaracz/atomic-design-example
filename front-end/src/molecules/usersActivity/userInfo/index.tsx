import React from 'react'
import { useStyle } from 'molecules/usersActivity/userInfo/styled'
import { ButtonHome } from 'atoms/buttons'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/types'
import { Redirect } from 'react-router-dom'
import { MessageWrapper } from 'molecules/usersActivity/userInfo/messageWrapper'

export const UserInfo = () => {
  const { signUp: { addedUser }, changePass: { updateUser } } = useSelector((state: RootState) => state)
  const { root, text, textDistinction } = useStyle()

  if (!addedUser.userId && !updateUser.userId) {
    return <Redirect to="/unauthorized" />
  }
  return (
    <div className={root}>
      <p className={text}>
        Hello <span className={textDistinction}>{addedUser.username || updateUser.username}</span>
      </p>
      <MessageWrapper addedUser={addedUser} updateUser={updateUser} />
      <ButtonHome label="sign in" path="/sign-in" />
    </div>
  )
}
