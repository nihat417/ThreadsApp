import React, { useState } from 'react';
import { StyledView, StyledScrollView,StyledText,StyledInput, InputSearch } from '../../../../common/StyledComponents';
import SearchItem from '../components/SearchItem';

const Search = () => {
  return (
    <StyledView className='bg-[#0D0D0D]'>
        <StyledText className='text-white text-[32px] mt-[40px] ml-[20px]'>Search</StyledText>
        {/*  */}
        <StyledView className='flex-row items-center bg-[#1A1A1A] rounded-[20px] mx-[20px] mt-[10px] mb-[20px]'>
          <InputSearch className = "ml-[10px]"/>
          <StyledInput placeholder='Search' placeholderTextColor='#FFF' className='text-white bg-[#1A1A1A] '/>
        </StyledView>
        {/*  */}

        <StyledScrollView className ='bg-[#0D0D0D]'>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </StyledScrollView>

    </StyledView>
  )
}

export default Search;