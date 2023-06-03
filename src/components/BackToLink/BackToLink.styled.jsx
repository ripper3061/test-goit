import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 8px 20px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  transition: color 250ms linear;

  :hover {
    color: #5736a3;
  }
`;
