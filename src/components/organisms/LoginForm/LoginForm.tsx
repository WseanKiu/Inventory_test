import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { Label } from '../../atoms/Label';
import words from '../../../constants/words';

type Props = {
  employeeNumber: string;
  password: string;
  onChangeEmployeeNumber: (text: string) => void;
  onChangePassword: (text: string) => void;
  employeeNumberError?: string;
  passwordError?: string;
  onClickLogin: () => void;
};

const ErrorMessage = styled(Label)`
  margin-top: 8px;
  margin-left: 12px;
  font-size: 12px;
  color: #f05f5f;
`;

const ComponentWrapper = styled.div`
  margin-bottom: 12px;
`;

const Component = ({
  employeeNumber,
  onChangeEmployeeNumber,
  employeeNumberError,
  password,
  onChangePassword,
  passwordError,
  onClickLogin,
}: Props): React.ReactElement => {
  return (
    <>
      <ComponentWrapper>
        <TextInput
          value={employeeNumber}
          placeholder={words.employeeNumber}
          onChangeText={onChangeEmployeeNumber}
        />
        <ErrorMessage>{employeeNumberError}</ErrorMessage>
      </ComponentWrapper>
      <ComponentWrapper>
        <TextInput
          value={password}
          placeholder={words.password}
          onChangeText={onChangePassword}
        />
        <ErrorMessage>{passwordError}</ErrorMessage>
      </ComponentWrapper>
      <Button onPress={onClickLogin} title={words.login} />
    </>
  );
};

export default Component;
