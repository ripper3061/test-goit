import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: "Montserrat";
  gap: 2px;
  padding: 8px 20px;
  width: 130px;
  color: #474747;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #dedede;

  transition: color 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

  :hover {
    color: #000;
    background-color: #ebd8ff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
