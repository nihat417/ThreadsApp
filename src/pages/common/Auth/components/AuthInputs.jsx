import React from 'react';
import {
  StyledView,
  StyledText,
  StyledInput,
} from '../../../../common/StyledComponents';

const AuthInputs = ({placeholder, setData, inputName}) => {
  const handleText = text => {
    setData(prevState => ({
      ...prevState,
      [inputName]: text,
    }));
  };

  return (
    <StyledInput
      onChangeText={text => handleText(text)}
      placeholderTextColor="#878787"
      placeholder={placeholder}
      className="pl-[20px] py-3 text-[16px] text-white mx-[20px] border-[2px] border-[#312E2E] rounded-[10px] mb-[20px]"
    />
  );
};

export default AuthInputs;
