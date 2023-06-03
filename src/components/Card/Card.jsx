import {
  Avatar,
  BgImg,
  Button,
  FollowersText,
  Container,
  Line,
  LogoBox,
  TweetsText,
  AvatarBox,
} from "./Card.styled";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as Ellipse } from "../../images/Ellipse.svg";
import bgImg from "../../images/pictureBg.png";

import { useState } from "react";
import { updateTweet } from "../../utils/api";

export const Card = ({
  user,
  followers,
  tweets,
  changeFollowersAmount,
  id,
  avatar,
  isFollowing,
}) => {
  const [isFollow, setIsFollow] = useState(isFollowing || false);
  const [followersAmount, setFollowersAmount] = useState(followers ?? 0);

  const countedFollowersAmount = new Intl.NumberFormat("en-US").format(
    followersAmount
  );
  const btnText = isFollow ? "Following" : "Follow";
  const handleClick = () => {
    if (isFollow) {
      const newAmount = followersAmount - 1;
      setFollowersAmount(newAmount);
      changeFollowersAmount(newAmount, id, false);
      setIsFollow(false);

      updateTweet(id, { followers: newAmount, isFollowing: false });

      return;
    }
    const newAmount = followersAmount + 1;
    setFollowersAmount(newAmount);
    changeFollowersAmount(newAmount, id, true);
    setIsFollow(true);

    updateTweet(id, { followers: newAmount, isFollowing: true });
  };

  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <BgImg src={bgImg} alt="background" />
      <AvatarBox>
        <Ellipse />
        <Avatar src={`${avatar}`} alt={user} />
      </AvatarBox>
      <Line />
      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>{countedFollowersAmount} Followers</FollowersText>
      <Button type="button" onClick={handleClick} isFollow={isFollow}>
        {btnText}
      </Button>
    </Container>
  );
};
