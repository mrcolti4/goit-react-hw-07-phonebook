import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContactList } from 'redux/selectors';

import style from './ContactList.module.css';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => dispatch(fetchContacts()));
  };

  return (
    <>
      {contacts.length === 0 && <h2>You don't add any contacts yet</h2>}
      <ul className={style.contact__list}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id ? id : name} className={style.contact__item}>
              <span className="name">{name}:</span>
              <span className="phone">{number}</span>
              <button
                type="button"
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
