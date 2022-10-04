import PropTypes from 'prop-types';

import FriendItem from './FriendItem';

import { FriendBox, FriendElem } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <FriendBox>
      {friends.map(friend => {
        return (
          <FriendElem key={friend.id}>
            <FriendItem friend={friend} />
          </FriendElem>
        );
      })}
    </FriendBox>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
