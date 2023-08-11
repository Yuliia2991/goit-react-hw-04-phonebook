import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    contacts.length > 0 && (
      <ul className={css.contacts}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contacts__item} key={id}>
            <p className={css.contacts__text}>
              {name}: {number}
            </p>
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
