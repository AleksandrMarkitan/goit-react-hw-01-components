import PropTypes from 'prop-types';

import {
  ProfileBox,
  Description,
  Name,
  TagLocation,
  StatisticList,
  StatisticItem,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

const defaultAvatarImg =
  'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

export default function Profile({
  username,
  tag,
  location,
  avatar = defaultAvatarImg,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileBox>
      <Description>
        <img src={avatar} alt="User avatar" width="100" className="avatar" />
        <Name>{username}</Name>
        <TagLocation>@{tag} </TagLocation>
        <TagLocation>{location} </TagLocation>
      </Description>

      <StatisticList>
        <StatisticItem>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{followers}</SpanQuantity>
        </StatisticItem>
        <StatisticItem>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{views}</SpanQuantity>
        </StatisticItem>
        <StatisticItem>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{likes}</SpanQuantity>
        </StatisticItem>
      </StatisticList>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
