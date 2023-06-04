import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;

  &:hover .dropdown-content {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const DropdownButton = styled.button`
  background-color: #dedede;
  color: black;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: block;
  width: 100%;

  border-radius: 4px;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    background-color: #ebd8ff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const DropdownContent = styled.div`
  opacity: 0;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  ${DropdownContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;
