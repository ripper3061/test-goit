import { useState } from "react";
// import {
//   getDataFromLocalStorage,
//   setDataToLocalStorage,
// } from "../../utils/getSetDataLocalStorage";
import { Container } from "./CardList.styled";
// import { useEffect } from "react";
import { Card } from "../Card/Card.jsx";

export const CardList = ({ data }) => {
  const [tweets, settweets] = useState(data);

  const changeFollowersAmount = (value, id, following) => {
    settweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, followers: value, following } : tweet
      )
    );
  };

  return (
    <Container>
      {data &&
        data.map(({ id, avatar, user, followers, tweets, following }) => (
          <Card
            key={id}
            avatar={avatar}
            user={user}
            followers={followers}
            tweets={tweets}
            changeFollowersAmount={changeFollowersAmount}
            id={id}
            following={following}
          />
        ))}
    </Container>
  );
};
