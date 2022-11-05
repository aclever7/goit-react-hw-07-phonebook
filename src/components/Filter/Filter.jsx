import PropTypes from 'prop-types';
import { filterContacts } from '../../redux/contacts/actions';
import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
