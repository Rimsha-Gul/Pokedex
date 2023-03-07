import styled from "styled-components";
import { useState } from "react";

const ImagesContainer = styled.div`{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 0px 15px;
    align-items: center;
    margin: 0px 0 8px;
    justify-content: space-around;
    background-color: #ffffff30;
    padding: 10px;
    border-radius: 16px;
}`

const ImageColumns = styled.div`{
    padding: 6px;
    margin-right: 0px;
}`

const CardImage = styled.img` {
    margin: 6px auto;
    object-fit: contain;
    justify-items: center;

    &:hover {
      cursor: pointer;
    }
}`;

const Appearance = styled.div`{
    text-align: center;
    font-size: 14px;
}`;

export default function PokeImages({normal, normalBack, shiny, shinyBack}) {
    const [frontSide, setFrontSide ] = useState(true);
    const [shinyFrontSide, setShinyFrontSide ] = useState(true);

    return (
        <ImagesContainer>
            <ImageColumns>
                <CardImage alt= 'poke-img' onClick={() => setFrontSide(prevSide => !prevSide)} src={frontSide ? normal : normalBack}></CardImage>
                <Appearance>Normal</Appearance>
            </ImageColumns>
            <ImageColumns>
                <CardImage alt= 'poke-img' onClick={() => setShinyFrontSide(prevSide => !prevSide)} src={shinyFrontSide ? shiny : shinyBack}></CardImage>
                <Appearance>Shiny</Appearance>
            </ImageColumns>
        </ImagesContainer>
    )
}