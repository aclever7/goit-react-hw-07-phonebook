import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  removeContact,
} from '../../redux/contacts/phonebookOperation';
import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactListButton,
} from './Contact.styled';

const Contact = () => {
  const { filter, entities } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const contacts = entities.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            {name}: {number}
            <ContactListButton
              key={id}
              name={name}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </ContactListButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

Contact.propTypes = {
  handleContactFilter: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
