import styled from "styled-components";

const CardTitle = styled.h2` {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 16px;
}`;

export default function PokeName({name}) {
    return (
        <CardTitle>{name}</CardTitle>
    )
}