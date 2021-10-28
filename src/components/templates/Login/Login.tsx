import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import words from '../../../constants/words';
import { Label } from '../../atoms/Label';
import { AppLogo } from '../../atoms/Logos';
import { Toast } from '../../atoms/Toast';
import { LoginForm } from '../../organisms/LoginForm';
import { LoginSchema } from './validation';

const Wrapper = styled.div`
  padding: 30px;
`;

const LogoWrapper = styled.div`
  height: 120px;
  margin-top: 45px;
  margin-bottom: 45px;
`;

const Logo = styled(AppLogo)`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const HeaderTitle = styled(Label)`
  display: block;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: '#000000';
`;

export type Props = {
  login: (values: object) => void;
  loginError: string;
};

const Component = ({ login, loginError }: Props): React.ReactElement => {
  const initialValues = {
    employeeNumber: '',
    password: '',
  };

  const [showLoginError, setShowLoginError] = useState(false);

  useEffect(() => {
    if (loginError) {
      setShowLoginError(true);
    }
  }, [loginError]);

  return (
    <>
      <Wrapper>
        <HeaderTitle>{words.todoApp}</HeaderTitle>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={login}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
          }): React.ReactElement => {
            const { employeeNumber, password } = values;
            const {
              employeeNumber: employeeNumberError,
              password: passwordError,
            } = errors;
            return (
              <LoginForm
                employeeNumber={employeeNumber}
                password={password}
                onChangeEmployeeNumber={handleChange('employeeNumber')}
                onChangePassword={handleChange('password')}
                employeeNumberError={employeeNumberError}
                passwordError={passwordError}
                onClickLogin={handleSubmit}
              />
            );
          }}
        </Formik>
      </Wrapper>
      {showLoginError && <Toast title={words.loginError} />}
    </>
  );
};

export default Component;
