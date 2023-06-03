import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 4px;
  margin-bottom: 4px;
  box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 9px 0px;
  font-size: 20px;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;

  align-items: center;
  padding-bottom: 15px;
`;

export const Link = styled(NavLink)`
  justify-content: space-between;
  width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid;
  border-radius: 10px;
  text-decoration: none;
  background-color: #dedede;
  color: rgb(55, 55, 55);
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  margin-right: 5px;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  &.active {
    background-color: #ebd8ff;
  }
`;
