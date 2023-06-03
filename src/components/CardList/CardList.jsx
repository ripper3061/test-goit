// import { useState } from "react";

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
