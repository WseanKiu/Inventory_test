import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Warning } from '../Icons';

const Wrapper = styled.div`
  flex-direction: row;
  background-color: #f6c3c5;
  width: 100%;
  align-items: center;
  padding: 16px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #333333;
  margin-left: 12px;
  margin-right: 12px;
`;

type Props = {
  title: string;
  delay?: number;
};

const Component = ({ title, delay = 5000 }: Props): React.ReactElement => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(!isShow);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return isShow ? (
    <Wrapper>
      <Warning height={24} width={24} />
      <Text>{title}</Text>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Component;
