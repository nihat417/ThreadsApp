import { StyledView, StyledScrollView,StyledText } from '../../../../common/StyledComponents';
import React from 'react'
import ActivityHeader from '../components/ActivityHeader';
import ActivityItem from './ActivityItem';

const Activitiy = () => {
  return (
    <StyledView className='bg-[#0D0D0D] '>

      {/*  */}
      <ActivityHeader/>
      {/*  */}

      <StyledScrollView className='h-full'>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
      </StyledScrollView>

    </StyledView>
  )
}

export default Activitiy;