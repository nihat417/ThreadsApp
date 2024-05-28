import React from 'react';
import { StyledButton,StyledView,HomeTab,SearchTab,WriteTab,LikeTab,AccauntTab } from '../../common/StyledComponents'

const NavTab = ({state, navigation}) => {

  return (
    <StyledView className='absolute bottom-0 w-full flex-row justify-between bg-[#0D0D0D] p-4'>
        <StyledButton onPress={()=> navigation.navigate('Home')}><HomeTab/></StyledButton>
        <StyledButton onPress={()=>navigation.navigate('Search')}><SearchTab/></StyledButton>
        <StyledButton onPress={()=>navigation.navigate('NewThread')}><WriteTab/></StyledButton>
        <StyledButton onPress={()=> navigation.navigate('Activity')}><LikeTab/></StyledButton>
        <StyledButton onPress={()=>navigation.navigate('Profile')}><AccauntTab/></StyledButton>
    </StyledView>
  )
}

export default NavTab;