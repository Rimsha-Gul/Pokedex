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
  
const Ability = styled.li`{
    text-transform: capitalize;
    color: white;
    font-weight: lighter;
    padding: 0 8px;
}`;

export default function PokeAbilities({abilitiesList}) {
    return (
        <AbilityListBackground>
            <AbilityList>
                {abilitiesList.first && <Ability>{abilitiesList.first.key}: {abilitiesList.first.shortDesc}</Ability>}
                {abilitiesList.second && <Ability>{abilitiesList.second.key}: {abilitiesList.second.shortDesc}</Ability>}
                {abilitiesList.hidden && <Ability>{abilitiesList.hidden.key}: {abilitiesList.hidden.shortDesc}</Ability>}
                {abilitiesList.special && <Ability>{abilitiesList.special.key}: {abilitiesList.special.shortDesc}</Ability>}
            </AbilityList>
        </AbilityListBackground>
    )
}