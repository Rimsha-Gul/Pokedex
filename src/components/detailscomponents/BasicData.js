import styled from "styled-components";

const Alignment = styled.div`{
    text-align: center;
    font-weight: lighter;
}`;

const CardSubtitle = styled.p` {
    padding: 2px;
}`;

const Property = styled.span`{
    padding: 4px;
}`;

export default function BasicData({pokeHeight, pokeWeight, pokeGender}) {
    return (
        <Alignment>
            <CardSubtitle><Property>Height:</Property>{pokeHeight} m</CardSubtitle>
            <CardSubtitle><Property>Weight:</Property>{pokeWeight} kg</CardSubtitle>
            <CardSubtitle>{pokeGender.male}<Property>male     </Property>{pokeGender.female}<Property>female</Property></CardSubtitle>
        </Alignment>
    )
}