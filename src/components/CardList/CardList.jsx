import { useState } from "react";

import { Container } from "./CardList.styled";

import { Card } from "../Card/Card.jsx";

export const CardList = ({ data }) => {
  const [tweets, setTweets] = useState(data);

  const changeFollowersAmount = (value, id, following) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, followers: value, following } : tweet
      )
    );
  };

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
            changeFollowersAmount={changeFollowersAmount}
            id={id}
          />
        ))}
    </Container>
  );
};
