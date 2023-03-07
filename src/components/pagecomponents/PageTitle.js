import styled from "styled-components";

const PokeTitle = styled.h1` {
    text-transform: capitalize;
    text-align: center;
    font-size: 64px;
    color: #ffcb05;
    text-outline: 2px 4px 8px rgba(42, 117, 187);
    font-family: namesake;
}`;

export default function PageTitle() {
    return (
        <PokeTitle>Pokédex</PokeTitle>
    )
}