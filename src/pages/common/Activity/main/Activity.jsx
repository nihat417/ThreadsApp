import {
  StyledView,
  StyledScrollView,
  StyledText,
} from '../../../../common/StyledComponents';
import React, {useState} from 'react';
import ActivityHeader from '../components/ActivityHeader';
import ActivityItem from './ActivityItem';
import Replies from '../../../../common/Replies';
import Posts from '../../../../common/Posts';

const Activity = () => {
  const [selectedActivity, setSelectedActivity] = useState('mentions');

  return (
    <StyledView className="bg-[#0D0D0D] flex-1">
      <ActivityHeader
        selectedActivity={selectedActivity}
        setSelectedActivity={setSelectedActivity}
      />

      <StyledView className="w-full px-5">
        {selectedActivity === 'replies' ? (
          <Replies />
        ) : (
          <Posts mention={true} />
        )}
      </StyledView>
    </StyledView>
  );
};

export default Activity;
