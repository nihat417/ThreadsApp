import React from 'react'
import { StyledView,StyledButton,StyledText,StyledImage } from '../../../../common/StyledComponents';
import ToggleSwitch from 'toggle-switch-react-native'

const EditProfile = () => {
  return (
    <StyledView className='bg-[#000] h-full'>
         <StyledView className='my-[40%] border-[2px] rounded-[10px] border-[#424141] mx-[10px]'>
          <StyledView className='flex flex-row justify-between mx-[20px] my-[20px] border-b-2 border-[#424141]'>
            <StyledView className='flex flex-col mb-[20px]'>
              <StyledText className='text-white text-[16px]'>Name</StyledText>
              <StyledText className='text-white text-[16px]'>Ana de armas</StyledText>
            </StyledView>
            <StyledImage className='w-[50px] h-[50px] rounded-[30px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
          </StyledView>
          <StyledView className='flex flex-col mx-[20px] mt-[10px] mb-[20px] border-b-2 border-[#424141]'>
            <StyledView className='mb-[20px]'>
              <StyledText className='text-white text-[16px]'>Bio</StyledText>
              <StyledText className='text-white text-[16px] w-[250px]'>Curious to learn somethingunique or challenging</StyledText>
            </StyledView>
          </StyledView>
          <StyledView className='flex flex-col mx-[20px] mt-[10px] mb-[20px] border-b-2 border-[#424141]'>
            <StyledView className='mb-[10px]'>
              <StyledText className='text-white text-[16px]'>Link</StyledText>
              <StyledText className='text-[#3F3F3F] text-[16px]'>+ Add link</StyledText>
            </StyledView>
          </StyledView>
          <StyledView className='mx-[20px] mt-[10px] mb-[20px] border-b-2 border-[#424141]'>
            <StyledView className='flex flex-row justify-between mb-[10px]'>
              <StyledText className='text-white text-[16px]'>Private profile</StyledText>
              <ToggleSwitch
                isOn={false}
                onColor="green"
                offColor="red"
                size="large"
                onToggle={isOn => console.log("changed to : ", isOn)}
              />
            </StyledView>
          </StyledView>
         </StyledView>
    </StyledView>
  )
}

export default EditProfile;