import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';

import { SpanStatus, NameTitle } from './Friends.styled';

export default function FriendItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <SpanStatus isOnline={isOnline}>
        <BsCheck style={{ color: '#fff' }} size={12} />
      </SpanStatus>
      <img src={avatar} alt="User avatar" width="56" />
      <NameTitle>{name}</NameTitle>
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
