import React from "react";
import { Container } from "../styles";
export function CharacterCard(props) {
  console.log(props);
  const {
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
    episode,
    air_date,
    url,
  } = props.character;
  console.log(url);
  return (
    <Container width={"65%"} direction={"column"} className="card">
      <h3> {name} </h3>
      <Container justify={"space-between"}>
        {image && (
          <Container width={"40%"}>
            <img src={image} alt={name} />
          </Container>
        )}
        {origin ? (
          <Container width={"45%"} direction={"column"}>
            <p>Location: {location.name} </p>
            <p>Origin: {origin.name} </p>
            <p>Species: {species} </p>
            <p>Gender: {gender} </p>
            <p>Life Status: {status} </p>
          </Container>
        ) : (
          <Container width={"100%"} direction={"column"}>
            <p>Air Date: {air_date} </p>
            <p>Episode: {episode} </p>
          </Container>
        )}
      </Container>
    </Container>
  );
}
