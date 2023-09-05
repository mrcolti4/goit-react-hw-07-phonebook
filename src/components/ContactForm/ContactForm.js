import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContactList } from 'redux/selectors';
import { isOnList } from 'js/utils/isOnList';
import style from './ContactForm.module.css';
import { addContact, fetchContacts } from 'redux/contacts/contactsOperations';
import { basicSchema } from 'js/validation/schema';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectFilteredContactList);

  const onSubmit = ({ name, number }) => {
    if (isOnList(contactList, name)) {
      return alert('Contact with this name already in list');
    }
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => dispatch(fetchContacts()));
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: basicSchema,
    onSubmit,
  });

  const canBeSubmitted = (values = {}, errors = {}) => {
    const isError = Object.keys(errors).some(error => errors[error]);
    const isFiled = Object.keys(values).every(value => values[value]);

    return !isError && isFiled;
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label className={style.contact__label}>
        Name
        <input
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </label>
      <label className={style.contact__label}>
        Number
        <input
          type="text"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={values.number}
          name="number"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.number && errors.number && <p>{errors.number}</p>}
      </label>
      <button disabled={!canBeSubmitted(values, errors)} type="submit">
        Add contact
      </button>
    </form>
    // <Formik
    //   enableReinitialize={true}
    //   initialValues={{
    //     name: name,
    //     number: number,
    //   }}
    // >
    //   {({ errors }) => (
    //     <Form onSubmit={handleSubmit} className={style.contact__form}>
    //       <label className={style.contact__label}>
    //         Name
    //         <InputField
    //           validate={validateName}
    //           type="text"
    //           name="name"
    //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //           required
    //           value={name}
    //           changeState={setName}
    //           className={errors.name && 'error'}
    //           validateOnChange={true}
    //         />
    //       </label>
    //       <label className={style.contact__label}>
    //         Phone
    //         <InputField
    //           validate={validateNumber}
    //           type="tel"
    //           name="number"
    //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //           required
    //           value={number}
    //           changeState={setNumber}
    //           className={errors.number && 'error'}
    //           validateOnChange={true}
    //         />
    //       </label>
    //       <button disabled={!canBeSubmitted()} type="submit">
    //         Add contact
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
  );
};
