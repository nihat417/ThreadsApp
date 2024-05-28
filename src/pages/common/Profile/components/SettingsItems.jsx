import React from 'react'
import { StyledView,StyledButton,StyledText } from '../../../../common/StyledComponents';

const SettingsItems = ({icon,title}) => {
  return (
    <StyledView>
        <StyledButton className='flex flex-row items-center my-[15px] mx-[20px]'>
            <StyledView>
                {icon}
            </StyledView>
            <StyledText className='text-white text-[20px] ml-[10px]'>{title}</StyledText>
        </StyledButton>
    </StyledView>
  )
}

export default SettingsItems;