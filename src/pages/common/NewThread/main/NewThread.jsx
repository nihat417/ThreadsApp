import React,{useContext,useRef} from 'react'
import { StyledView,StyledText,StyledButton,StyledImage, TreeSvg, StyledInput, FileShare } from '../../../../common/StyledComponents';
import { TabBarVisibilityContext } from '../../../../contexts/TabBarVisibilityContext';

const NewThread = () => {
  const { setTabBarVisible } = useContext(TabBarVisibilityContext);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setTabBarVisible(false);
  };

  const handleBlur = () => {
    setTabBarVisible(true);
  };

  return (
    <StyledView className='flex flex-row h-screen bg-[#000]'>
      <StyledView className='mt-[30px] ml-[20px]'>
        <StyledImage className='w-[50px] h-[50px] rounded-[30px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
        <TreeSvg className="ml-[22.5px]"/>
        <StyledImage className='w-[25px] h-[25px] rounded-[30px] ml-[12.5px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
      </StyledView>

      <StyledView>
        <StyledView className='mt-[30px] ml-[20px]'>
          <StyledText className='text-white text-[16px]'>Ana De armas</StyledText>
          <StyledInput ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} placeholderTextColor="#B8B8B8" placeholder='Start a thread ...'/>
          <StyledButton>
            <FileShare className = "my-[20px]"/>
          </StyledButton>
          <StyledText className='text-[#232323] text-[18px]'>Add to thread</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

export default NewThread;