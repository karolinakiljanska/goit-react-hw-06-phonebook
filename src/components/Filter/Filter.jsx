import { useSelector, useDispatch } from 'react-redux';

import style from './Filter.module.scss';
import { getFilter, setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
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
