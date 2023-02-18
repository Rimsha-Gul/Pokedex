import { useQuery} from '@apollo/client';
import { GET_ALL_POKEMONS } from '../query';
import styled from 'styled-components';
import Colors from '../colors/colors';
import { useState } from 'react';

const Container = styled.div` {
    padding: 40px;
    margin: 0 auto;
  }`;

const PageTitle = styled.h1` {
    text-transform: uppercase;
    text-align: center;
    font-size: 54px;
}`;
  
 const Card = styled.a` {
  text-decoration: none;
    list-style: none;
    padding: 30px;
    width: 320px;
    background-color: #ffffff40;
    color: white;
    text-align: center;
    border-radius: 24px;

    &:hover {
      transform: scale(1.06);
      transition: all 0.2s ease-in-out;
    }
}`;
  
const CardImage = styled.img` {
    height: 120px;
    width: 120px;
    margin-bottom: 16px;
    margin: 0 auto;
    object-fit: contain;
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
  opacity: 0.8;
}`;


const PokeNum = styled.p` {
    font-weight: lighter;
    color: white;
    margin-left: 16px;
    text-align: left;
}`;

const CardWrapper = styled.div` {
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
}`;
  
const SearchBar = styled.div` {
  margin: 0 auto;
  width: 480px;
  height: 24px;
  padding: 16px;
  background: #ffffff40;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}`;

const SearchInput = styled.input` {
  font-size: 16px;
  line-height: 1;
  border: none;
  margin-left: 16px;
  background-color: transparent;
  outline: none;
  color: white;
  width: 100%;
  border: 1px solid transparent;

  &:focus,
  &:active {
    outline: none;
  }
}`;

export default function PokeList() {
    const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {variables: {offset: 88,
    take: 1389,
    reverse: false,
    offsetFlavorTexts: 0,
    takeFlavorTexts: 1,
    reverseFlavorTexts: true}});
    console.log(data);
    const [searchValue, setSearchValue] = useState("");
    const getFilteredPokemon = () => data.getAllPokemon.filter((pokemon)=>
                                     pokemon.key.toLowerCase().includes(searchValue.toLowerCase()))
                                     console.log(searchValue);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(getFilteredPokemon());
    
    return (
      <Container>
        <PageTitle>My Pokedex</PageTitle>
        <SearchBar>
          <SearchInput
          type='search'
          placeholder='Search pokemon'
          value={searchValue}
          onChange={(e) => {setSearchValue(e.target.value)}}
          ></SearchInput>
        </SearchBar>
        <CardWrapper>
          {getFilteredPokemon().map((pokemon =>
          <Card href={'/pokedetails/'+pokemon.key}>
            <PokeNum>#{String(pokemon.num).padStart(4, '0')}</PokeNum>
            <CardImage src={pokemon.sprite} alt= 'poke-img'></CardImage>
            <CardTitle>{pokemon.key}</CardTitle>
            <PokeTypes>
              {pokemon.types.map((poketype =><Type type={poketype.name.toLowerCase()}>{poketype.name}</Type>))}
            </PokeTypes>
          </Card>))}
        </CardWrapper>
      </Container>
  );
}