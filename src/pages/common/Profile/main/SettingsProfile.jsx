import React from 'react'
import { StyledView,StyledButton,StyledImage,StyledText, User, Notfication, NewFollow, Privacy, Language, Help, About, FlwInvite } from '../../../../common/StyledComponents';
import SettingsItems from '../components/SettingsItems';

const SettingsProfile = () => {
  return (
    <StyledView className='h-screen bg-[#000]'>
        <SettingsItems icon={<FlwInvite/>} title="Follow and invite friends"/>
        <SettingsItems icon={<Notfication/>} title="Notifications"/>
        <SettingsItems icon={<Privacy/>} title="Privacy"/>
        <SettingsItems icon={<User/>} title="Account"/>
        <SettingsItems icon={<Language/>} title="Language"/>
        <SettingsItems icon={<Help/>} title="Help"/>
        <SettingsItems icon={<About/>} title="About"/>
        <StyledButton>
          <StyledText className='text-white text-[18px] ml-[20px] mt-[10px]'>Log Out</StyledText>
        </StyledButton>
    </StyledView>
  )
}

export default SettingsProfile;