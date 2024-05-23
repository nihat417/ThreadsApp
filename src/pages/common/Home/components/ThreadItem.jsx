import React, { useState } from 'react';
import { StyledText,StyledButton,StyledView,StyledImage, AddButton, Dots, Repost, Send, Heart, Comment, TreeSvg, HeartFiled } from '../../../../common/StyledComponents'

const ThreadItem = () => {
  const [isliked,setIsliked] = useState(false);

  return (
    <StyledView className='flex flex-row mt-[20px]'>
      <StyledView>
          <StyledView>
              <StyledImage className='h-[46px] w-[46px] mr-[20px] rounded-[20px]' source={require("../../../../assets/Images/anadearmas.jpg")}/>
              <StyledButton className='absolute bottom-0 right-4'>
                  <AddButton/>
              </StyledButton>
          </StyledView>
      </StyledView>
      <StyledView>
          <StyledText className ="text-white text-[16px] mb-[5px]">Ana De Armas</StyledText>
          <StyledView className='w-[260px]'><StyledText className='text-white text-[14px]'>Failures are stepping stones to success.Embrace them, learn from them, and keepmoving forward</StyledText></StyledView>
          <StyledView className='flex flex-col'>
      <StyledView className='flex flex-row justify-between mt-[5px]'>
          <StyledView ></StyledView>
          <StyledView className='flex flex-row  mr-[100px]'>
              <StyledButton onPress= {()=>{setIsliked(!isliked)}}>
                  {isliked ?  <Heart className = "mr-[10px]"/> :<HeartFiled className = "mr-[10px]"/> }
              </StyledButton>
              <StyledButton><Comment className = "mr-[10px]"/></StyledButton>
              <StyledButton><Repost className = "mr-[10px]"/></StyledButton>
              <StyledButton><Send className = "mr-[10px]"/></StyledButton>
          </StyledView>
          <StyledView></StyledView>
      </StyledView>
      <StyledView className='flex flex-row justify-between mt-[2px]'>
          <StyledView ></StyledView>
          <StyledView className='flex flex-row  mr-[200px]'>
              <StyledText className='text-[#A0A0A0]'>1 Like</StyledText>
          </StyledView>
          <StyledView></StyledView>
      </StyledView>
  </StyledView>
      </StyledView>
      <StyledView className='flex flex-row'>
          <StyledText className='text-[#A0A0A0] text-[15px] '>49m</StyledText>
          <Dots/>
      </StyledView>
      </StyledView>
  )
}

export default ThreadItem;