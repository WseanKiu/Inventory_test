import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input.attrs((props: object) => ({ ...props }))`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  border: 1px solid #d4dce6;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding-left: 13px;
  padding-right: 13px;
  display: block;
  width: 100%;
  height: 37px;
`;

type Props = {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password';
};

const Component = ({
  value,
  placeholder,
  type = 'text',
  onChangeText,
}: Props): React.ReactElement => {
  const onChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    if (onChangeText) {
      onChangeText(target.value);
    }
  };
  return (
    <StyledTextInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Component;
