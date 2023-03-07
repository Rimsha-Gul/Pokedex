import styled from "styled-components";

const Heading = styled.div`{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}`;

export default function DataHeading({heading}) {
    return (
        <Heading>{heading}</Heading>
    )
}