import styled from "styled-components";

export const LoadButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  border: 1px solid;
  border-radius: 10px;
  background-color: #ebd8ff;
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
    scale: 1.05;
    background-color: #5cd3a8;
  }
`;
