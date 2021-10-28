import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useAuthHooks } from '../../../hooks/auth';
import { Login } from '../../templates/Login';

type Props = {
  loginError?: string;
  isLoggedIn?: boolean;
  didSetPassword?: boolean;
  didLogin?: boolean;
};

const Component = ({ loginError = '' }: Props): React.ReactElement => {
  const { useLogin } = useAuthHooks();
  const { login } = useLogin();
  const { mutate: loginMutation } = useMutation(
    ([loginId, password]: [string, string]) => {
      return login(loginId, password);
    },
  );
  const submitLoginForm = useCallback((values: Object): void => {
    const { employeeNumber, password } = values as {
      employeeNumber: string;
      password: string;
    };
    loginMutation([employeeNumber, password]);
  }, []);

  return <Login loginError={loginError} login={submitLoginForm} />;
};

export default Component;
