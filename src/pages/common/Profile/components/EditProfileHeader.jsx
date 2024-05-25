import React from 'react'
import { StyledButton,StyledView,StyledText, Close } from '../../../../common/StyledComponents';
import {useNavigation} from '@react-navigation/native';

const EditProfileHeader = () => {
    const navigation = useNavigation();
  return (
    <StyledView className='bg-[#000] flex flex-row py-[40px] px-[20px] justify-between'>
        <StyledView className='flex flex-row'>
            <StyledButton onPress={() => navigation.goBack()}>
              <Close/>
            </StyledButton>
            <StyledText className='ml-[20px] text-[#fff] text-[18px]'>Edit Profile</StyledText>
        </StyledView>
        <StyledButton>
          <StyledText className='text-[#B8B8B8] text-[18px]'>Done</StyledText>
        </StyledButton>
    </StyledView>
  )
}

export default EditProfileHeader;