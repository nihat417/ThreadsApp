import React from 'react'
import { StyledView,StyledButton,StyledText } from '../../../../common/StyledComponents';

const AuthButton = ({title}) => {
  return (
    <StyledButton className='mx-[20px] bg-[#0070FA] rounded-[30px]'>
        <StyledText className='text-center text-white text-[20px] p-[15px]'>{title}</StyledText>
    </StyledButton>
  )
}

export default AuthButton;