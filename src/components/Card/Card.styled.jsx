import styled from "styled-components";
// space: [0, 2, 4, 8, 16, 20, 26, 28, 36],
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-top: 28px;
  padding-bottom: 36px;
  padding-left: 36px;
  padding-right: 36px;
`;

export const LogoBox = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const BgImg = styled.img`
  margin-bottom: 88px;
`;

export const AvatarBox = styled.div`
  position: absolute;
  top: 178px;
  z-index: 1;
  width: 80px;
  height: 80px;
  background: #5736a3;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  top: 8px;
  right: 8px;
  z-index: -1;
  width: 64px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #ebd8ff;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const TweetsText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ebd8ff;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 16px;
`;

export const FollowersText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ebd8ff;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  border: 1px solid;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.isFollow) {
      return "#5CD3A8";
    } else {
      return "#EBD8FF";
    }
  }};
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  scale: 1;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    scale: 1.01;
  }
`;
