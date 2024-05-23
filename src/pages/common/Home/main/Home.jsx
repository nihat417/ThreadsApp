import React from 'react'
import { StyledView,StyledText,StyledButton, StyledScrollView,StyledImage,ThreadsLogo, AddButton, Dots, Repost, Send, Heart, Comment } from '../../../../common/StyledComponents';


const Home = () => {
  return (
    <StyledScrollView className = "bg-[#0D0D0D]">
        <StyledView className = "flex items-center mt-[30px]">
            <ThreadsLogo/>
        </StyledView>

        
        <StyledView className='flex mt-[30px] ml-[10px] mr-[10px] p-[5px]'>
            <StyledView className='flex flex-row'>
                <StyledView>
                    <StyledImage className='h-[46px] w-[46px] mr-[20px] rounded-[20px]' source={require("../../../../assets/Images/anadearmas.jpg")}/>
                    <StyledButton className='absolute bottom-6 right-4'>
                        <AddButton/>
                    </StyledButton>
                </StyledView>
                <StyledView>
                    <StyledText className ="text-white text-[16px] mb-[5px]">Ana De Armas</StyledText>
                    <StyledView className='w-[260px]'><StyledText className='text-white text-[14px]'>Failures are stepping stones to success.Embrace them, learn from them, and keepmoving forward</StyledText></StyledView>
                </StyledView>
                <StyledView className='flex flex-row'>
                    <StyledText className='text-[#A0A0A0] text-[15px] '>49m</StyledText>
                    <Dots/>
                </StyledView>
            </StyledView>
            <StyledView className='flex flex-row justify-between mt-[5px]'>
                <StyledView ></StyledView>
                <StyledView className='flex flex-row  mr-[100px]'>
                    <Heart className = "mr-[10px]"/>
                    <Comment className = "mr-[10px]"/>
                    <Repost className = "mr-[10px]"/>
                    <Send className = "mr-[10px]"/>
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
    </StyledScrollView>
  )
}

export default Home;