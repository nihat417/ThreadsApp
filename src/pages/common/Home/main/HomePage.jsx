import {
  StyledView,
  StyledScrollView,
  ThreadsLogo,
} from '../../../../common/StyledComponents';
import {useState, useEffect} from 'react';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import ThreadItem from '../components/ThreadItem';
import {FlatList} from 'react-native';
import {refreshTokens} from '../../../../utils';

const HomePage = () => {
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/posts/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
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

    getPosts();
  }, []);

  const renderItem = ({item}) => (
    <ThreadItem item={item} userId={item.userId} />
  );

  return (
    <StyledScrollView className="bg-[#0D0D0D]">
      <StyledView className="items-center mt-[30px] px-5">
        <ThreadsLogo />
        <FlatList
          className="w-full h-full"
          key={item => item._id}
          data={posts}
          renderItem={item => renderItem(item)}
        />
      </StyledView>
    </StyledScrollView>
  );
};

export default HomePage;
