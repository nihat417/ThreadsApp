import React from 'react'
import { StyledView,StyledScrollView,StyledText,StyledButton } from '../../../../common/StyledComponents';

const ActivityHeader = () => {
  return (
    <StyledView className='mt-[30px] ml-[10px]'>
        <StyledText className='text-white text-[32px] mb-[5px]'>Activity</StyledText>
        <StyledScrollView horizontal = {true} className='my-[20px]'>
            <StyledButton className='bg-[#fff] w-[100px] mr-[15px] rounded-[5px] '><StyledText className='text-center text-[16px] py-[5px]'>All</StyledText></StyledButton>
            <StyledButton className='bg-[#000] w-[100px] mr-[15px] rounded-[5px] border-[1px] border-[#2F2F2F]'><StyledText className='text-center text-white text-[16px] py-[5px]'>Replies</StyledText></StyledButton>
            <StyledButton className='bg-[#000] w-[100px] mr-[15px] rounded-[5px] border-[1px] border-[#2F2F2F]'><StyledText className='text-center text-white text-[16px] py-[5px]'>Mentions</StyledText></StyledButton>
            <StyledButton className='bg-[#000] w-[100px] mr-[15px] rounded-[5px] border-[1px] border-[#2F2F2F]'><StyledText className='text-center text-white text-[16px] py-[5px]'>Replies</StyledText></StyledButton>
        </StyledScrollView>
    </StyledView>
  )
}

export default ActivityHeader;