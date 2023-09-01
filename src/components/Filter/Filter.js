import { useDispatch, useSelector } from 'react-redux';

import { filterByName } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getFilter);

  const onFilter = e => {
    dispatch(filterByName(e.target.value));
  };

  return (
    <label className={style.filter__label}>
      Find contacts by name
      <input onChange={onFilter} type="text" name="filter" value={selector} />
    </label>
  );
};
