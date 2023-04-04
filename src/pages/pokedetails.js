import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from "../query";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Colors from '../colors/colors';
import PageTitle from '../components/pagecomponents/PageTitle';
import PokeNumber from '../components/cardcomponents/PokeNumber';
import PokeName from '../components/cardcomponents/PokeName';
import PokeImages from '../components/detailscomponents/PokeImages';
import PokeTypes from '../components/cardcomponents/PokeTypes';
import BasicData from '../components/detailscomponents/BasicData';
import DataHeading from '../components/detailscomponents/DataHeading';
import PokeStats from '../components/detailscomponents/PokeStats';
import PokeAbilities from '../components/detailscomponents/PokeAbilities';
import TrainingData from '../components/detailscomponents/TrainingData';
import BreedingData from '../components/detailscomponents/BreedingData';
import PokeLoadingGif from '../components/pagecomponents/PokeLoading';

const Container = styled.div` {
    padding: 0px;
    text-shadow: 2px 2px 3px #000000;
    font-family: helvetica;
    background-color: #fefefe;
  }`;

const CardSubtitle = styled.p` {
    font-weight: lighter;
    color: white;
    padding: 0 8px;
}`;

const Alignment = styled.div`{
  text-align: center;
}`

const DataContainer = styled.div`{
  display: flex;
	flex-direction: column;
	justify-content: space-around;
  width: 700px;
	align-items: center;
	border-radius: 16px;
	padding: 20px 20px;
  background-image: linear-gradient(to bottom right, ${(props) => props.color1 ? Colors(props.color1) : "#ffd015"}, 
  ${(props) => props.color2 ? Colors(props.color2) : "#ffd015"});
}`;

const RightData = styled.div`{
  display: flex;
	flex-direction: column;
	height: -webkit-fill-available;
	justify-content: space-evenly;
	gap: 3px 0px;
}`;

const Description = styled.div`{
  background-color: #ffffff30;
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

const DetailsContainer = styled.div`{
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 1rem;
	padding: 20px 20px;
  width: 600px;
  background-image: linear-gradient(to bottom right, ${(props) => props.color1 ? Colors(props.color1) : "#ffd015"}, 
  ${(props) => props.color2 ? Colors(props.color2) : "#ffd015"});

  @media screen and (max-width: 767px) {
    width: 700px;
  }
}`;

const DetailsContaiinerWrap = styled.div`{
  width: 100%;
	display: flex;
	flex-direction: row;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: flex;
		flex-direction: column;
    justify-content: center;
  }
}`

const ContainerBackground = styled.div`{
  padding: 40px;
  color: white;
}`

const StatsContainer = styled.div`{
  @media screen and (max-width: 767px) {
    width: 500px;
  }
}`

export default function PokeDetails() {  
    const location = useLocation();
    const elements = location.pathname.split("/");
    const pokename = elements[elements.length-1]

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {variables: {pokemon: pokename}});
   
    if (loading) return <PokeLoadingGif />;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <Container>
        <PageTitle>My Pokédex</PageTitle>
        <ContainerBackground>
          <DetailsContaiinerWrap>
            <DetailsContainer color1={data.getPokemon.types[0].name.toLowerCase()} color2={ data.getPokemon.types.length === 2 ? data.getPokemon.types[1].name.toLowerCase() : data.getPokemon.types[0].name.toLowerCase()}>
              <PokeNumber number={data.getPokemon.num} />
              <PokeName name={data.getPokemon.key} />
              <PokeImages normal={data.getPokemon.sprite} normalBack={data.getPokemon.backSprite} shiny={data.getPokemon.shinySprite} shinyBack={data.getPokemon.shinyBackSprite} />
              <PokeTypes typenames={data.getPokemon.types}/>
              <BasicData pokeHeight={data.getPokemon.height} pokeWeight={data.getPokemon.weight} pokeGender={data.getPokemon.gender} />
              <StatsContainer>
                <DataHeading heading='Base Stats' />
                <PokeStats stats={data.getPokemon.baseStats}/>
                <Alignment><CardSubtitle>Stats Total: {data.getPokemon.baseStatsTotal}</CardSubtitle></Alignment>
              </StatsContainer>
            </DetailsContainer>

            <DataContainer color1={data.getPokemon.types[0].name.toLowerCase()} color2={ data.getPokemon.types.length === 2 ? data.getPokemon.types[1].name.toLowerCase() : data.getPokemon.types[0].name.toLowerCase()}>
              <RightData>
                <DataHeaderContainer>
                  <AboutContainer>
                  <DataHeading heading='About' />
                    {data.getPokemon.flavorTexts.map((pokeflavortext =><Description>{pokeflavortext.flavor}</Description>))}
                  </AboutContainer>
                </DataHeaderContainer>
                <DataHeaderContainer>
                  <AbilitiesContainer>
                  <DataHeading heading='Abilities' />
                  <PokeAbilities abilitiesList={data.getPokemon.abilities}/>
                  </AbilitiesContainer>
                </DataHeaderContainer>
                
                {data.getPokemon.catchRate &&
                <DataHeaderContainer>
                  <AbilitiesContainer>
                  <DataHeading heading='Training' />
                    <TrainingData pokeCRate={data.getPokemon.catchRate} pokeLRate={data.getPokemon.levellingRate}/>
                  </AbilitiesContainer>
                </DataHeaderContainer>}

                <DataHeaderContainer>
                  <AbilitiesContainer>
                  <DataHeading heading='Breeding' />
                  <BreedingData pokeEGroups={data.getPokemon.eggGroups} pokeMinHTime={data.getPokemon.minimumHatchTime} pokeMaxHTime={data.getPokemon.maximumHatchTime}/>
                  </AbilitiesContainer>
                </DataHeaderContainer>
              </RightData>
            </DataContainer>
          </DetailsContaiinerWrap>
        </ContainerBackground>
      </Container>
    );
}