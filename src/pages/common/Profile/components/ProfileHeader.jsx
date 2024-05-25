import React from 'react'
import { StyledView,StyledButton,StyledImage,StyledInput, Globus, Instagram, ProfileMenu } from '../../../../common/StyledComponents';

const ProfileHeader = () => {
  return (
    <StyledView className='bg-[#0D0D0D] my-[30px] mx-[10px] flex flex-row justify-between'>
      <StyledButton>
          <Globus/>
      </StyledButton>
      <StyledView className='flex flex-row'>
        <StyledButton>
          <Instagram/>
        </StyledButton>
        <StyledButton>
          <ProfileMenu/>
        </StyledButton>
      </StyledView>
    </StyledView>
  )
}

export default ProfileHeader;