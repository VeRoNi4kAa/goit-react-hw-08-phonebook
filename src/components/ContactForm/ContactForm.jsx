import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useCreateContactMutation } from '../../redux/services/contacts';
import {
  Message,
  Label,
  SubmitButton,
  FormContainer,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

export default function ContactForm({ data }) {
  const [createContact] = useCreateContactMutation();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      name: name,
      number: number,
    };
    if (
      !data.find(
        oldContact =>
          oldContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      createContact(contact);
    } else {
      toast(`${contact.name} is already in contacts`);
    }
    resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContainer>
          <Form autoComplete="off">
            <div>
              <Label htmlFor="name">Name</Label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                render={message => (
                  <Message>
                    Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de
                    Castelmore d'Artagnan
                  </Message>
                )}
              />
            </div>
            <div>
              <Label htmlFor="tel">Number</Label>
              <Field type="tel" name="number" />
              <ErrorMessage
                name="number"
                render={message => (
                  <Message>
                    Phone number must be digits and can contain spaces, dashes,
                    parentheses and can start with +
                  </Message>
                )}
              />
            </div>
            <SubmitButton type="submit">Add contact</SubmitButton>
          </Form>
        </FormContainer>
      </Formik>
    </div>
  );
}
ContactForm.propTypes = {
  data: PropTypes.array,
};
