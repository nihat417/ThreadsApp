import React from 'react'
import { StyledView , StyledScrollView , StyledButton , StyledInput, StyledImage, ActivityHeart, StyledText, Verified, NewFollow } from '../../../../common/StyledComponents';
import ActivityHeader from '../components/ActivityHeader';

const ActivityItem = () => {
  return (
    <StyledView className=' mx-[10px] my-[20px]'>
      <StyledButton className='flex flex-row'>
        <StyledView>
          <StyledImage className='w-[48px] h-[48px] rounded-[20px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
          <StyledView className = "absolute bottom-[-5px] right-[-1px]">
            {/* <ActivityHeart/> */}
            <NewFollow/>
          </StyledView>
        </StyledView>
        <StyledView className='flex flex-col ml-[20px]'>
          <StyledView className='flex flex-row'>
            <StyledText className='text-white text-[16px] mr-[5px]'>Ana de armas</StyledText>
            <Verified/>
            <StyledText className='text-[#B8B8B8] text-[16px] ml-[5px]'>2d</StyledText>
          </StyledView>
          <StyledText className='text-[#B8B8B8] text-[16px]'>Followed you</StyledText>
        </StyledView>
        <StyledButton className='w-[120px] h-[40px] ml-[60px] rounded-[20px] border-solid border-[1px] border-[#1A1A1A]'>
            <StyledText className='text-white text-[16px] mx-[35px] my-[5px]'>Follow</StyledText>
        </StyledButton>
      </StyledButton>  
    </StyledView>
  )
}

export default ActivityItem;