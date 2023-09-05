import * as yup from 'yup';

const nameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberValidation =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameValidation, { message: 'Invalid name' })
    .required(),
  number: yup
    .string()
    .matches(numberValidation, { message: 'Invalid number' })
    .required(),
});
