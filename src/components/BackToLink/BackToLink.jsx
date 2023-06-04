import PropTypes from 'prop-types';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { StyledLink } from "./BackToLink.styled";

export const BackToLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftSquareFill size="24" />
      {children}
    </StyledLink>
  );
};

BackToLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};