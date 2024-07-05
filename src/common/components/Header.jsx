import {useNavigation} from '@react-navigation/native';
import {
  StyledView,
  StyledText,
  StyledButton,
  LeftArrow,
} from '../StyledComponents';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <StyledView className="w-full flex-row items-center justify-center bg-zinc-700 py-4">
      <StyledButton onPress={navigation.goBack()} className="absolute left-4">
        <LeftArrow />
      </StyledButton>
      <StyledText className="text-white text-lg">{title}</StyledText>
    </StyledView>
  );
};

export default Header;
