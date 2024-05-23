import { styled } from "nativewind";
import {Text, View, Image, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import ThreadsLogo from '../assets/Svg/ThreadsLogo'
import AddButton from '../assets/Svg/AddButton'
import Dots from '../assets/Svg/Dots'
import Heart from '../assets/Svg/Heart'
import Comment from '../assets/Svg/Comment'
import Repost from '../assets/Svg/Repost'
import Send from '../assets/Svg/Send'
import TreeSvg from '../assets/Svg/TreeSvg'


export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledInput = styled(TextInput);
export const StyledButton = styled(TouchableOpacity);
export const StyledScrollView = styled(ScrollView);
export const StyledImage = styled(Image);

export {ThreadsLogo,AddButton,Dots,Heart,Comment,Repost,Send,TreeSvg}