import styled from "styled-components";

export const Label = styled.label`
  text-decoration: ${(prop) => {
    return prop.isCheck === true ? "line-through" : "none";
  }};
`;
