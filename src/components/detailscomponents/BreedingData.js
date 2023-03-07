import styled from "styled-components";

const AbilityListBackground = styled.div`{
    background-color: #ffffff30;
    padding: 12px;
    border-radius: 1rem;
    margin-top: 0.5rem;
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
  
const EggGroups = styled.ul`{
    display: flex;
    flex-direction: row;
    gap: 8px 2px;
    padding-inline-start: 1em;
    list-style-type: none;	
}`;

export default function BreedingData({pokeEGroups, pokeMinHTime, pokeMaxHTime}) {
    return (
        <AbilityListBackground>
            <EggGroups>
                <TrainingRates>Egg Groups:</TrainingRates>
                {pokeEGroups.map((pokegroup =><TrainingRates>{pokegroup}</TrainingRates>))}
            </EggGroups>
            {pokeMinHTime && pokeMaxHTime &&
            <EggGroups>
                <TrainingRates>Hatch time: {pokeMinHTime} - {pokeMaxHTime} steps</TrainingRates>
            </EggGroups>}
        </AbilityListBackground>
    )
}