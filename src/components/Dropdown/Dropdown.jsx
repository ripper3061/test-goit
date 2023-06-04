import { useState } from "react";
import PropTypes from 'prop-types';
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
} from "./Dropdown.styled";

export const Dropdown = ({ handleClickOnDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>Filter</DropdownButton>
      <DropdownContent>
        <DropdownButton onClick={() => handleClickOnDropdown(null)}>
          Show all
        </DropdownButton>
        <DropdownButton onClick={() => handleClickOnDropdown(false)}>
          Fallow
        </DropdownButton>
        <DropdownButton onClick={() => handleClickOnDropdown(true)}>
          Fallowing
        </DropdownButton>
      </DropdownContent>
    </DropdownContainer>
  );
};


Dropdown.propTypes = {
  onClick: PropTypes.func,
};