import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyledView,StyledButton,StyledText, LeftArrow } from '../../../../common/StyledComponents';
import { BackHandler } from 'react-native';

const ProfileCustomHeader = ({mytext}) => {
    const navigation = useNavigation();
  return (
    <StyledView className='flex flex-row pl-[20px] py-[30px] bg-[#000]'>
        <StyledButton className='mr-[10px] mt-[5px]' onPress={()=>navigation.goBack()}>
            <LeftArrow/>
        </StyledButton>
        <StyledText className='text-white text-[22px]'>{mytext}</StyledText>
    </StyledView>
  )
}

export default ProfileCustomHeader;