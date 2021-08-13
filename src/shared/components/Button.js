import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  font-size: 1.25rem;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 300ms linear;
  ${({ secondary }) => `
    background-color: ${secondary ? "#f14668" : "#3298dc"};
    &:hover {
      background-color: ${secondary ? "#f03a5f" : "#2793da"};
    }
  `}
`;

export default Button;
