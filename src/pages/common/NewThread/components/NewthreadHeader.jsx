import React from 'react'
import { StyledView,StyledText,StyledButton, Close } from '../../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const NewthreadHeader = () => {
    const navigation =useNavigation();
  return (
    <StyledView className='flex flex-row items-center bg-[#000] py-[30px] px-[20px]'>
        <StyledButton onPress={()=>navigation.goBack()}>
            <StyledView>
                <Close/>
            </StyledView>
        </StyledButton>
        <StyledText className='text-white text-[20px] ml-[20px]'>New Thread</StyledText>
    </StyledView>
  )
}

export default NewthreadHeader;