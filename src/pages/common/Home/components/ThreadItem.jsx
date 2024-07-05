import {useState, useEffect} from 'react';
import {
  StyledText,
  StyledButton,
  StyledView,
  StyledImage,
  Dots,
  Repost,
  Send,
  Heart,
  Comment,
  HeartFiled,
} from '../../../../common/StyledComponents';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import {refreshTokens} from '../../../../utils';

const ThreadItem = ({item, userId}) => {
  const [fetchedUser, setFetchedUser] = useState(null);
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [isliked, setIsliked] = useState(false);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/users/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setFetchedUser(data);
      } else if (response.status === 403) {
        const tokens = await refreshTokens(
          'http://localhost:4000/auth/refresh',
          {
            refreshToken: refreshToken,
          },
        );
        await setAccessToken(tokens.accessToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userId && getUserInfo();
  }, [userId]);

  return (
    <StyledButton
      onPress={() => {
        console.log(item);
      }}>
      <StyledView className="w-full flex-row justify-between mt-[20px]">
        <StyledImage
          className="h-[46px] w-[46px] rounded-full"
          source={{
            uri: fetchedUser?.profilePicture,
          }}
        />

        <StyledView>
          <StyledView className="flex-row items-center gap-2 mb-[5px]">
            <StyledText className="text-white text-[16px]">
              {fetchedUser?.firstname} {fetchedUser?.lastname}
            </StyledText>
            <StyledText className="text-[#A0A0A0] text-[14px]">49m</StyledText>
          </StyledView>
          <StyledView className="w-[260px]">
            <StyledText className="text-white text-[14px]">
              {item?.textContent}
            </StyledText>
          </StyledView>
          <StyledView className="flex flex-col">
            <StyledView className="flex flex-row justify-between mt-[5px]">
              <StyledView className="flex flex-row gap-[10px] mr-[100px]">
                <StyledButton
                  onPress={() => {
                    setIsliked(!isliked);
                  }}>
                  {isliked ? <Heart /> : <HeartFiled />}
                </StyledButton>
                <StyledButton>
                  <Comment />
                </StyledButton>
                <StyledButton>
                  <Repost />
                </StyledButton>
                <StyledButton>
                  <Send />
                </StyledButton>
              </StyledView>
            </StyledView>
            <StyledView className="flex flex-row justify-between mt-[2px]">
              <StyledView className="flex flex-row  mr-[200px]">
                <StyledText className="text-[#A0A0A0]">
                  {item?.likes?.length}{' '}
                  {item?.likes?.length > 1 ? 'Likes' : 'Like'}
                </StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
        <StyledView className="flex flex-row">
          <Dots />
        </StyledView>
      </StyledView>
      {/* {item.replies.length && <ThreadCommentItem item={item} />} */}
    </StyledButton>
  );
};

export default ThreadItem;
