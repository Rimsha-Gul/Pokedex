import { GET_POKEMON_DETAILS } from "../query";
import { useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Colors from '../colors/colors';
import React from "react";
import { useState } from "react";

const Container = styled.div` {
    padding: 40px;
  }`;

const PageTitle = styled.h1` {
    text-transform: uppercase;
    text-align: center;
    font-size: 54px;
}`;
  
const CardImage = styled.img` {
    height: 80px;
    margin-bottom: 16px;
    margin: 0 auto;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
}`;
  
const CardTitle = styled.h2` {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 8px;
}`;

const PokeTypes = styled.ul` {
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
}`;

const PokeNum = styled.p` {
    font-weight: lighter;
    color: white;
    margin-left: 16px;
    text-align: left;
}`;

const CardSubtitle = styled.p` {
    font-weight: lighter;
    color: white;
    padding: 0 8px;
}`;

const Property = styled.span`{
    font-weight: lighter;
    color: white;
    margin-left: 4px;
    margin-right: 10px;
    text-align: left;
}`;

const Alignment = styled.div`{
  text-align: center;
}`

const DataContainer = styled.div`{
  display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 1rem;
	padding: 20px 20px;
  background: #ffffff40;
}`;

const RightData = styled.div`{
  display: flex;
	flex-direction: column;
	height: -webkit-fill-available;
	justify-content: space-evenly;
	gap: 3px 0px;
}`;

const Headings = styled.div`{
  text-align: center;
		margin-top: 10px;
    font-weight: bold;
  font-size: 24px;
}`;

const Description = styled.div`{
  background-color: #ffffff40;
	padding: 10px 20px;
	border-radius: 1rem;
	margin-top: 0.5rem;
  padding-inline-start: 1em;
}`;

const DataHeaderContainer = styled.div`{
  align-items: center;
	justify-content: space-around;
	display: flex;
}`

const AboutContainer = styled.div`{
  margin-top: 20px;
	align-items: center;
	gap: 0px;
  justify-content: space-around;
}`

const AbilitiesContainer = styled.div`{
  margin-top: 20px;
		align-items: center;
		gap: 0px;
    justify-content: space-around;
}`

const AbilityListBackground = styled.div`{
  background-color: #ffffff40;
	padding: 12px;
	border-radius: 1rem;
	margin-top: 0.5rem;
}`;

const AbilityList = styled.ul`{
  display: flex;
  flex-direction: column;
	gap: 8px 120px;
	padding-inline-start: 1em;
}`;

const Ability = styled.li`{
  text-transform: capitalize;
  color: white;
  font-weight: lighter;
  padding: 0 8px;
}`;

const TrainingRates = styled.p`{
  text-transform: capitalize;
  color: white;
  font-weight: lighter;
  margin-bottom: 0px;
  margin-right: 4px;
  padding: 0 8px;
}`;

const StatsDataContainer = styled.div`{
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	grid-gap: 8px 15px;
	gap: 8px 15px;
	align-items: center;
	margin: 8px 100px;
	justify-content: space-around;
	background-color: #ffffff40;
	padding: 10px;
	border-radius: 1rem;
	margin-top: 0.5rem;
}`;

const ImagesContainer = styled.div`{
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	grid-gap: 0px 15px;
	gap: 0px 15px;
	align-items: center;
	margin: 0px 0;
	justify-content: space-around;
	background-color: #ffffff40;
	padding: 10px;
	border-radius: 1rem;
	margin-top: 0.5rem;
}`

const StatsColumns = styled.div`{
  width: 120px;
	margin-right: 0px;
}`;

const ImageColumns = styled.div`{
  width: 135px;
	margin-right: 0px;
  text-align: center;
}`

const StatName = styled.div`{
  text-align: center;
}`

const StatValue = styled.div`{
  text-align: center;
}`

const Appearance = styled.div`{
  padding: 10px 0px;
  text-align: center;
}`;

const EggGroups = styled.ul`{
  display: flex;
  flex-direction: row;
	gap: 8px 2px;
	padding-inline-start: 1em;
  list-style-type: none;	
}`

const DetailsContainer = styled.div`{
  display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 1rem;
	padding: 20px 20px;
  width: 600px;
  background: #ffffff40;
}`;

const DetailsContaiinerWrap = styled.div`{
  width: 100%;
	display: flex;
	flex-direction: row;
  gap: 20px;
}`

const ContainerBackground = styled.div`{

}`

const Type = styled.button`{
  background-color: ${(props) =>
    props.type ? Colors(props.type) : "#ffd015"};
  padding: 8px 10px;
  margin: 0 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 13px;
  color: white;
}`;

export default function PokeDetails() {  
    const location = useLocation();
    const elements = location.pathname.split("/");
    const pokename = elements[elements.length-1]

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {variables: {pokemon: pokename}});
    const [lightMode, setLightMode ] = useState(true);
    const [lightMode2, setLightMode2 ] = useState(true);
   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <Container>
        <PageTitle>My Pokedex</PageTitle>
        <ContainerBackground>
          <DetailsContaiinerWrap>
            <DetailsContainer>
              <PokeNum>#{String(data.getPokemon.num).padStart(4, '0')}</PokeNum>
              <CardTitle>{data.getPokemon.key}</CardTitle>
              <ImagesContainer>
                <ImageColumns>
                  <CardImage alt= 'poke-img' onClick={() => setLightMode(prevMode => !prevMode)} src={lightMode ? data.getPokemon.sprite : data.getPokemon.backSprite}></CardImage>
                  <Appearance>Normal</Appearance>
                </ImageColumns>
                <ImageColumns>
                  <CardImage alt= 'poke-img' onClick={() => setLightMode2(prevMode => !prevMode)} src={lightMode2 ? data.getPokemon.shinySprite : data.getPokemon.shinyBackSprite}></CardImage>
                  <Appearance>Shiny</Appearance>
                </ImageColumns>
              </ImagesContainer>
              <PokeTypes>
                {data.getPokemon.types.map((poketype =><Type type={poketype.name.toLowerCase()}>{poketype.name}</Type>))}
              </PokeTypes>
              <Alignment>
                <CardSubtitle><Property>Height:</Property>{data.getPokemon.height} m</CardSubtitle>
                <CardSubtitle><Property>Weight:</Property>{data.getPokemon.weight} kg</CardSubtitle>
                <CardSubtitle>{data.getPokemon.gender.male}<Property>male     </Property>{data.getPokemon.gender.female}<Property>female</Property></CardSubtitle>
              </Alignment>
              <div>
                <Headings>Base Stats</Headings>
                <StatsDataContainer>
                  <StatsColumns>
                    <StatName>Attack</StatName>
                    <StatValue>{data.getPokemon.baseStats.attack}</StatValue>
                  </StatsColumns>
                  <StatsColumns>
                    <StatName>Defense</StatName>
                    <StatValue>{data.getPokemon.baseStats.defense}</StatValue>
                  </StatsColumns>
                  <StatsColumns>
                    <StatName>HP</StatName>
                    <StatValue>{data.getPokemon.baseStats.hp}</StatValue>
                  </StatsColumns>
                  <StatsColumns>
                    <StatName>Special Attack</StatName>
                    <StatValue>{data.getPokemon.baseStats.specialattack}</StatValue>
                  </StatsColumns>
                  <StatsColumns>
                    <StatName>Special Defense</StatName>
                    <StatValue>{data.getPokemon.baseStats.specialdefense}</StatValue>
                  </StatsColumns>
                  <StatsColumns>
                    <StatName>Speed</StatName>
                    <StatValue>{data.getPokemon.baseStats.speed}</StatValue>
                  </StatsColumns>
                </StatsDataContainer>
                <Alignment><CardSubtitle>Stats Total: {data.getPokemon.baseStatsTotal}</CardSubtitle></Alignment>
              </div>
            </DetailsContainer>

            <DataContainer>
              <RightData>
                <DataHeaderContainer>
                  <AboutContainer>
                    <Headings>About</Headings>
                    {data.getPokemon.flavorTexts.map((pokeflavortext =><Description>{pokeflavortext.flavor}</Description>))}
                  </AboutContainer>
                </DataHeaderContainer>
                <DataHeaderContainer>
                  <AbilitiesContainer>
                    <Headings>Abilities</Headings>
                    <AbilityListBackground>
                      <AbilityList>
                        {data.getPokemon.abilities.first && <Ability>{data.getPokemon.abilities.first.key}: {data.getPokemon.abilities.first.shortDesc}</Ability>}
                        {data.getPokemon.abilities.second && <Ability>{data.getPokemon.abilities.second.key}: {data.getPokemon.abilities.second.shortDesc}</Ability>}
                        {data.getPokemon.abilities.hidden && <Ability>{data.getPokemon.abilities.hidden.key}: {data.getPokemon.abilities.hidden.shortDesc}</Ability>}
                        {data.getPokemon.abilities.special && <Ability>{data.getPokemon.abilities.special.key}: {data.getPokemon.abilities.special.shortDesc}</Ability>}
                      </AbilityList>
                    </AbilityListBackground>
                  </AbilitiesContainer>
                </DataHeaderContainer>
                
                {data.getPokemon.catchRate &&
                <DataHeaderContainer>
                  <AbilitiesContainer>
                    <Headings>Training</Headings>
                    <AbilityListBackground>
                      <AbilityList>
                        <TrainingRates>Base Catch Rate: {data.getPokemon.catchRate.base} ({data.getPokemon.catchRate.percentageWithOrdinaryPokeballAtFullHealth} with Pokeball, full HP)</TrainingRates>
                        {data.getPokemon.levellingRate &&
                        <TrainingRates>Levelling Rate: {data.getPokemon.levellingRate}</TrainingRates>}
                      </AbilityList>
                    </AbilityListBackground>
                  </AbilitiesContainer>
                </DataHeaderContainer>}

                <DataHeaderContainer>
                  <AbilitiesContainer>
                    <Headings>Breeding</Headings>
                    <AbilityListBackground>
                      <EggGroups>
                        <TrainingRates>Egg Groups:</TrainingRates>
                        {data.getPokemon.eggGroups.map((pokegroup =><TrainingRates>{pokegroup}</TrainingRates>))}
                      </EggGroups>
                      {data.getPokemon.minimumHatchTime && data.getPokemon.maximumHatchTime &&
                      <EggGroups>
                        <TrainingRates>Hatch time: {data.getPokemon.minimumHatchTime} - {data.getPokemon.maximumHatchTime} steps</TrainingRates></EggGroups>}
                    </AbilityListBackground>
                  </AbilitiesContainer>
                </DataHeaderContainer>
              </RightData>
            </DataContainer>
          </DetailsContaiinerWrap>
        </ContainerBackground>
      </Container>
    );
}