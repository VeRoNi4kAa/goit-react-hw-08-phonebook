import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export default function Filter({ filter, setFilter }) {
  const addFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input value={filter} onChange={addFilter} type="text" name="filter" />
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
