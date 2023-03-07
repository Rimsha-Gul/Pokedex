import styled from "styled-components";

const PokeNum = styled.p` {
    font-weight: lighter;
    text-align: left;
    font-style: italic;
}`;

export default function PokeNumber({number}) {
    return (
        <PokeNum>#{String(number).padStart(4, '0')}</PokeNum>
    )
}