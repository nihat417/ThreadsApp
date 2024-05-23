import React, { useState } from 'react';
import { StyledView,StyledText,StyledButton, StyledScrollView,StyledImage,ThreadsLogo, AddButton, Dots, Repost, Send, Heart, Comment, TreeSvg, HeartFiled } from '../../../../common/StyledComponents';
import ThreadItem from '../components/ThreadItem';
import ThreadCommentItem from '../components/ThreadCommentItem';


const Home = () => {
    
  return (
    <StyledScrollView className = "bg-[#0D0D0D]">
        <StyledView className = "flex items-center mt-[30px]">
            <ThreadsLogo/>
        </StyledView>

        
        <StyledView className='flex mt-[30px] ml-[10px] mr-[10px] p-[5px]'>

            {/*  */}
            <ThreadCommentItem/>
            

            {/*  */}
            <ThreadItem/>

            

        </StyledView>
    </StyledScrollView>
  )
}

export default Home;