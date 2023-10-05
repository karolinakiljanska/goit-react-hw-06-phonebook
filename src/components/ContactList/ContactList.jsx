import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.scss';
import { getContactsItems } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contactsItems = useSelector(getContactsItems);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contactsItems.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ul className={style.list}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })
      ) : (
        <li className={style.error}>Not found name</li>
      )}
    </ul>
  );
};

export default ContactList;
