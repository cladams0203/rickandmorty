import React from "react";
import { CharacterCard } from "./CharacterCard";
import { Container } from "../styles";

export function CharacterList(props) {
  const { characters, toggle, setToggle } = props;
  return (
    <Container direction={"column"}>
      <button onClick={() => setToggle(!toggle)}>
        {" "}
        {toggle ? "Characters" : "Episodes"}{" "}
      </button>
      {characters.map((item) => (
        <CharacterCard character={item} key={item.id} />
      ))}
    </Container>
  );
}
