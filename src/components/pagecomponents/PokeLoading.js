import styled from "styled-components";
import LoadingGif from '../../PikachuLoadingGif.gif'

const GifContainer = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}`

const PokeGif = styled.img`{
   width: 200px;
}`;

export default function PokeLoadingGif() {
    return (
        <GifContainer>
        <PokeGif src={LoadingGif} alt='Loading...' />
        </GifContainer>
    )
}