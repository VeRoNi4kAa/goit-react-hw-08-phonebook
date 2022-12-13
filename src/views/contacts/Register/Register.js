import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Message, Label, SubmitButton, FormContainer } from './Register.styled';
import { authOperations } from '../../../redux/auth';

export default function Register() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(authOperations.register(newUser));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer>
          <Form>
            <div>
              <Label htmlFor="name">Name</Label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                render={message => <Message>Please enter name</Message>}
              />
            </div>
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
            <SubmitButton type="submit">Register</SubmitButton>
          </Form>
        </FormContainer>
      </Formik>
    </div>
  );
}
