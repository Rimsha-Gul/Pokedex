import styled from "styled-components";

const CardImage = styled.img` {
    margin-bottom: 8px;
    margin: 0 auto;
    object-fit: contain;
    justify-items: center;
}`;

export default function PokeImage({pokesprite}) {
    return (
        <CardImage src={pokesprite} alt= 'poke-img'></CardImage>
    )
}