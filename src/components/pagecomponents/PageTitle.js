import styled from "styled-components";

const NavBar = styled.nav` {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width:100%
    width: 100vw;
}`

const PokeTitle = styled.h1` {
    text-transform: capitalize;
    text-align: center;
    font-size: 64px;
    color: #ffcb05;
    margin: 0;
    padding: 10px;
    text-outline: 2px 4px 8px rgba(42, 117, 187);
    font-family: namesake;
}`;

export default function PageTitle() {
    return (
        <NavBar>
            <PokeTitle>Pokédex</PokeTitle>
        </NavBar>
    )
}