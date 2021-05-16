import React, { FC } from 'react'
import { useStyle } from 'molecules/usersActivity/userInfo/styled'
import { MessageWrapperProps } from 'molecules/usersActivity/userInfo/types'

export const MessageWrapper: FC<MessageWrapperProps> = ({ addedUser, updateUser }) => {
  const { textDistinction, text } = useStyle()
  return addedUser.username ? (
    <p className={text}>
      For <span className={textDistinction}>you</span> New{' '}
      <span className={textDistinction}>account</span> was create
    </p>
  ) : updateUser.username ? (
    <p className={text}>
      User account was <span className={textDistinction}>successful</span>{' '}
      updated
    </p>
  ) : null
}
