import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/actions';
import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactListButton,
} from './Contact.styled';

const Contact = () => {
  const filter = useSelector(state => state.contacts.filter).toLowerCase();
  const items = useSelector(state => state.contacts.items);
  const contacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();

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
