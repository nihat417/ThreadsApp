import React, { useContext, useRef } from 'react';
import SearchItem from '../components/SearchItem';
import { TabBarVisibilityContext } from '../../../../contexts/TabBarVisibilityContext';
import { StyledView, StyledScrollView,StyledText,StyledInput, InputSearch } from '../../../../common/StyledComponents';

const Search = () => {

  const { setTabBarVisible } = useContext(TabBarVisibilityContext);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setTabBarVisible(false);
  };

  const handleBlur = () => {
    setTabBarVisible(true);
  };

  return (
    <StyledView className='bg-[#0D0D0D]'>
        <StyledText className='text-white text-[32px] mt-[40px] ml-[20px]'>Search</StyledText>
        {/*  */}
        <StyledView className='flex-row items-center bg-[#1A1A1A] rounded-[20px] mx-[20px] mt-[10px] mb-[20px]'>
          <InputSearch className = "ml-[10px]"/>
          <StyledInput ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} placeholder='Search' placeholderTextColor='#FFF' className='text-white bg-[#1A1A1A] '/>
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