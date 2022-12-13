import PropTypes from 'prop-types';
import { ButtonFilter, ListItem } from './ContactListItem.styled';

export default function ContactListItem({
  id,
  name,
  onDelete,
  deleting,
  number,
}) {
  return (
    <ListItem key={id}>
      {name} {number}
      <ButtonFilter type="button" id={id} onClick={() => onDelete(id)}>
        {deleting ? 'Deleting...' : 'Delete'}
      </ButtonFilter>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
