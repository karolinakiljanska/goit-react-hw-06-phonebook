import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/contactsSlice';
import style from './Filter.module.scss';
import { getFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleChangeFilter = event => {
    dispatch(filteredContacts(event.currentTarget.value));
  };

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={style.inputName}
        title="Enter search name"
        onChange={handleChangeFilter}
        value={filter}
      />
    </label>
  );
};

export default Filter;
