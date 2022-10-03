import PropTypes from 'prop-types';

import FriendItem from './FriendItem';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} class="item">
            <FriendItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
