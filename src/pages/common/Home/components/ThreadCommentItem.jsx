import {useState, useEffect} from 'react';
import {StyledView, TreeSvg} from '../../../../common/StyledComponents';
import {refreshTokens} from '../../../../utils';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import ThreadItem from './ThreadItem';

const ThreadCommentItem = ({item}) => {
  const [post, setPost] = useState({});
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );

  const getPost = async postId => {
    try {
      const response = await fetch(
        `http://localhost:4000/posts/post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );


      if (response.ok) {
        const data = await response.json();
        setPost(data);
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
    if (item.postId) {
      getPost(item.postId);
    }
  }, [item]);

  return (
    <StyledView>
      <ThreadItem item={post} userId={item.userId} />
      <TreeSvg className="ml-[20px]" />
      <ThreadItem item={item} userId={item.userId} />
    </StyledView>
  );
};

export default ThreadCommentItem;
