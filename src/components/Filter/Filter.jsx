import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/phonebookSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const { filter } = useSelector(state => state.contacts);
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
