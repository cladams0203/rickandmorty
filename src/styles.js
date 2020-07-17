import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width || "100%"};
  flex-wrap: wrap;
`;
