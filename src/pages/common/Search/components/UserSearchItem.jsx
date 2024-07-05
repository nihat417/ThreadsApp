import {
  StyledText,
  StyledButton,
  StyledView,
  StyledImage,
} from '../../../../common/StyledComponents';

const UserSearchItem = ({item}) => {
  return (
    <StyledView className="w-full flex-row justify-between">
      <StyledImage
        className="w-[50px] h-[50px] rounded-full"
        source={{uri: item.profilePicture}}
      />

      <StyledView className="w-10/12 flex-row items-center justify-between overflow-hidden">
        <StyledView>
          <StyledText className="text-white text-[16px]">
            {item.firstname} {item.lastname}
          </StyledText>
          <StyledText className="text-[#B8B8B8] text-[13px]">
            {item.nickname}
          </StyledText>
          <StyledText className="text-white text-[15px]">
            {item.followers.length} followers
          </StyledText>
        </StyledView>

        <StyledButton className="px-[30px] py-[10px] rounded-[20px] border-solid border-[1px] border-[#1A1A1A]">
          <StyledText className="text-white text-[16px]">Follow</StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default UserSearchItem;
