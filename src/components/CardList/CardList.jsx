import PropTypes from 'prop-types';
import { Container } from "./CardList.styled";
import { Card } from "../Card/Card.jsx";

export const CardList = ({ data }) => {
  return (
    <Container>
      {data &&
        data.map(({ id, avatar, user, followers, tweets, isFollowing }) => (
          <Card
            key={id}
            avatar={avatar}
            user={user}
            followers={followers}
            tweets={tweets}
            isFollowing={isFollowing}
            id={id}
          />
        ))}
    </Container>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      isFollowing: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
