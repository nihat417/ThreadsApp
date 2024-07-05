import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledButton,
} from '../../../../common/StyledComponents';

const ActivityHeader = ({setSelectedActivity, selectedActivity}) => {
  return (
    <StyledView className="mt-[30px] ml-[10px]">
      <StyledText className="text-white text-[32px] mb-[5px]">
        Activity
      </StyledText>
      <StyledScrollView horizontal={true} className="my-[20px]">
        <StyledButton
          onPress={() => {
            setSelectedActivity('replies');
          }}
          className={`${
            selectedActivity === 'replies' ? 'bg-white' : 'bg-black'
          } w-[100px] mr-[15px] rounded-[5px] border-[1px] border-[#2F2F2F]`}>
          <StyledText
            className={`${
              selectedActivity === 'replies' ? 'text-black' : 'text-white'
            } text-center text-[16px] py-[5px]`}>
            Replies
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setSelectedActivity('mentions');
          }}
          className={`${
            selectedActivity === 'mentions' ? 'bg-white' : 'bg-black'
          } w-[100px] mr-[15px] rounded-[5px] border-[1px] border-[#2F2F2F]`}>
          <StyledText
            className={`text-center ${
              selectedActivity === 'mentions' ? 'text-black' : 'text-white'
            } text-[16px] py-[5px]`}>
            Mentions
          </StyledText>
        </StyledButton>
      </StyledScrollView>
    </StyledView>
  );
};

export default ActivityHeader;
