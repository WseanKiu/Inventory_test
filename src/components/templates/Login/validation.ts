import * as Yup from 'yup';
import words from '../../../constants/words';

export const LoginSchema = Yup.object().shape({
  employeeNumber: Yup.string().required(`${words.required}`),
  password: Yup.string().required(`${words.required}`),
});
