import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Message, Label, SubmitButton, FormContainer } from './LogIn.styled';
import { authOperations } from '../../redux/auth';

export default function LogIn() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const user = {
      email: email,
      password: password,
    };
    dispatch(authOperations.logIn(user));
    resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer>
          <Form>
            {}
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                render={message => <Message>Please enter e-mail</Message>}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                render={message => <Message>Please enter password</Message>}
              />
            </div>
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        </FormContainer>
      </Formik>
    </div>
  );
}
