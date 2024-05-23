import React from 'react';
import { StyledText,StyledButton,StyledView,StyledImage, StyledInput, } from '../../../../common/StyledComponents';


const SearchItem = () => {
  return (
    <StyledView className='flex flex-row  mx-[20px] my-[10px]'>
        <StyledView>
            <StyledImage className='h-[48px] w-[48px] mr-[20px] rounded-[20px]' source={require('../../../../assets/Images/anadearmas.jpg')} />
        </StyledView>
        <StyledView>
            <StyledText className='text-white text-[16px]'>AnaDeeArms</StyledText>
            <StyledText className='text-[#B8B8B8] text-[13px]'>Ana de Armas</StyledText>
            <StyledText className='text-white text-[15px]'>33M followers</StyledText>
        </StyledView>
        <StyledButton className='w-[120px] h-[40px] ml-[80px] rounded-[20px] border-solid border-[1px] border-[#1A1A1A]'>
            <StyledText className='text-white text-[16px] mx-[35px] my-[5px]'>Follow</StyledText>
        </StyledButton>
    </StyledView>
  )
}

export default SearchItem;