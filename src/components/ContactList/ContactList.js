import { useDispatch, useSelector } from 'react-redux';

import { getContactList, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import style from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContactList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      {filteredContacts.length === 0 && <h2>You don't add any contacts yet</h2>}
      <ul className={style.contact__list}>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={style.contact__item}>
              <span className="name">{name}:</span>
              <span className="phone">{number}</span>
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
