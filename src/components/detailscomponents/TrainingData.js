import styled from "styled-components";

const AbilityListBackground = styled.div`{
    background-color: #ffffff30;
    padding: 12px;
    border-radius: 1rem;
    margin-top: 0.5rem;
}`;
  
const AbilityList = styled.ul`{
    display: flex;
    flex-direction: column;
    gap: 12px 120px;
    padding-inline-start: 1em;
}`;

const TrainingRates = styled.p`{
    text-transform: capitalize;
    color: white;
    font-weight: lighter;
    margin-bottom: 0px;
    margin-right: 4px;
    margin-top: 0px;
    padding: 0 8px;
}`;

export default function TrainingData({pokeCRate, pokeLRate}) {
    return (
        <AbilityListBackground>
            <AbilityList>
                <TrainingRates>Base Catch Rate: {pokeCRate.base} ({pokeCRate.percentageWithOrdinaryPokeballAtFullHealth} with Pokeball, full HP)</TrainingRates>
                {pokeLRate &&
                <TrainingRates>Levelling Rate: {pokeLRate}</TrainingRates>}
            </AbilityList>
        </AbilityListBackground>
    )
}