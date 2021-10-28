import React from 'react';
import styled from 'styled-components';

const themes = {
  primary: {
    enabled: {
      backgroundColor: '#1884FF',
      color: '#FEFEFE',
      borderColor: '#017AF5',
    },
    disabled: {
      backgroundColor: '#EFF2F7',
      color: '#9FB7D3',
      borderColor: '#D4DCE6',
    },
  },
  secondary: {
    enabled: {
      backgroundColor: '#777777',
      color: '#FFFFFF',
      borderColor: '#777777',
    },
    disabled: {
      backgroundColor: '#EFF2F7',
      color: '#9FB7D3',
      borderColor: '#D4DCE6',
    },
  },
  light: {
    enabled: {
      backgroundColor: '#FFFFFF',
      color: '#555555',
      borderColor: '#D4DCE6',
    },
    disabled: {
      backgroundColor: '#EFF2F7',
      color: '#9FB7D3',
      borderColor: '#D4DCE6',
    },
  },
};

const StyledButton = styled.button`
  padding: 13px;
  background: #017af5;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  display: block;
  width: 100%;
`;

type Props = {
  theme?: 'primary' | 'secondary' | 'light';
  onPress: () => void;
  title?: string;
  style?: Object;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
};

const Component = ({
  theme = 'primary',
  disabled = false,
  title,
  style,
  onPress,
  type = 'button',
}: Props): React.ReactElement => {
  const buttonTheme = themes[theme][disabled ? 'disabled' : 'enabled'];
  const buttonStyle = {
    backgroundColor: buttonTheme.backgroundColor,
    borderColor: buttonTheme.borderColor,
    ...style,
  };

  return (
    <StyledButton
      style={buttonStyle}
      onClick={onPress}
      disabled={disabled}
      type={type}>
      {title}
    </StyledButton>
  );
};

export default Component;
