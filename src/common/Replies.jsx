import {FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import ThreadCommentItem from '../pages/common/Home/components/ThreadCommentItem';
import {useEncryptedStorage} from '../hooks/useEncryptedStorage';
import {refreshTokens} from '../utils';
import {StyledText, StyledView} from './StyledComponents';

const Replies = ({user}) => {
  const [replies, setReplies] = useState([]);
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );

  const getReplies = async () => {
    try {
      const response = await fetch('http://localhost:4000/replies/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReplies(data);
      } else if (response.status === 403) {
        const tokens = await refreshTokens(
          'http://localhost:4000/auth/refresh',
          {
            refreshToken: refreshToken,
          },
        );
        await setAccessToken(tokens.accessToken);
      } else {
        Alert.alert('An error happened, please try again');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item}) => (
    <ThreadCommentItem item={item} user={item.userId} />
  );

  useEffect(() => {
    getReplies();
  }, [accessToken]);

  return (
    <FlatList
      className="w-full h-full"
      key={item => item._id}
      data={replies}
      renderItem={item => renderItem(item)}
      ListEmptyComponent={() => (
        <StyledView className="items-center">
          <StyledText className="text-zinc-300 mt-[50px]">
            No replies yet..
          </StyledText>
        </StyledView>
      )}
    />
  );
};

export default Replies;
