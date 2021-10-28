import React from 'react';
import styled from 'styled-components';

const Label = styled.span.attrs((props: Props) => {
  return { ...props };
})`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #555555;
`;

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: Object;
};

const Component = (props: Props): React.ReactElement => {
  return (
    <Label className={props.className} style={props.style}>
      {props.children}
    </Label>
  );
};

export default Component;
