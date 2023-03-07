import styled from "styled-components";

const StatsDataContainer = styled.div`{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 12px 15px;
    gap: 12px 15px;
    align-items: center;
    margin: 8px 40px;
    justify-content: space-around;
    background-color: #ffffff30;
    padding: 10px;
    border-radius: 1rem;
    margin-top: 0.5rem;
}`;
  
const StatsColumns = styled.div`{
    width: 120px;
    margin-right: 0px;
}`;
  
const StatName = styled.div`{
    text-align: center;
}`;

const StatValue = styled.div`{
    text-align: center;
}`;
  
export default function PokeStats({stats}) {
    return (
        <StatsDataContainer>
            <StatsColumns>
                <StatName>Attack</StatName>
                <StatValue>{stats.attack}</StatValue>
            </StatsColumns>
            <StatsColumns>
                <StatName>Defense</StatName>
                <StatValue>{stats.defense}</StatValue>
            </StatsColumns>
            <StatsColumns>
                <StatName>HP</StatName>
                <StatValue>{stats.hp}</StatValue>
            </StatsColumns>
            <StatsColumns>
                <StatName>Special Attack</StatName>
                <StatValue>{stats.specialattack}</StatValue>
            </StatsColumns>
            <StatsColumns>
                <StatName>Special Defense</StatName>
                <StatValue>{stats.specialdefense}</StatValue>
            </StatsColumns>
             <StatsColumns>
                <StatName>Speed</StatName>
                <StatValue>{stats.speed}</StatValue>
            </StatsColumns>
        </StatsDataContainer>              
    )
}