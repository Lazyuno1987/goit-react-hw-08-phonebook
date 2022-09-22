import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    const value = event.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label>
        Find the contact
        <Input type="text" onChange={changeFilter} name="filter" />
      </Label>
    </>
  );
};
