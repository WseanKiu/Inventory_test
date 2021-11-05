import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #1884ff;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;

type Props = {
  title: string;
};

const Component = ({ title }: Props): React.ReactElement => {
  return (
    <Wrapper>
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default Component;
