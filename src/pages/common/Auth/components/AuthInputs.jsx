import React from 'react'
import { StyledView,StyledText,StyledInput } from '../../../../common/StyledComponents';

const AuthInputs = ({placeholder}) => {
  return (
    <StyledView className='mx-[20px] border-[2px] border-[#312E2E] rounded-[10px] mb-[20px]'>
        <StyledInput placeholderTextColor ="#878787" placeholder={placeholder}
         className='pl-[20px] text-[16px]'/>
    </StyledView>
  )
}

export default AuthInputs;