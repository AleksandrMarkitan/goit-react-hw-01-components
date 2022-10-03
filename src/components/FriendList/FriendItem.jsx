import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import css from 'components/FriendList/FriendItem.module.css';

export default function FriendItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <span class="status">
        <BsFillCircleFill
          className={isOnline ? css.iconActive : css.iconDisactive}
          size={12}
        />
      </span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
