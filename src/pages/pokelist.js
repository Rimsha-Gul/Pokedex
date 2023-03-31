import { useQuery} from '@apollo/client';
import { GET_ALL_POKEMONS } from '../query';
import { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/pagecomponents/PageTitle';
import SearchBar from '../components/pagecomponents/SearchBar';
import PokeCard from '../components/pagecomponents/PokeCard';
import PokeLoadingGif from '../components/pagecomponents/PokeLoading';

const Container = styled.div` {
  text-shadow: 2px 2px 3px #000000;
  font-family: sans-serif;
  justify-items: center;
  padding: 0px;
}`;

const CardWrapper = styled.div` {
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}`;

export default function PokeList() {
    const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {variables: {offset: 89,
    take: 1390,
    reverse: false,
    offsetFlavorTexts: 0,
    takeFlavorTexts: 1,
    reverseFlavorTexts: true}});
    const [searchValue, setSearchValue] = useState("");
    const getFilteredPokemon = () => data.getAllPokemon.filter((pokemon)=>
                                     pokemon.key.toLowerCase().includes(searchValue.toLowerCase()))
    if (loading) return <PokeLoadingGif/>;
    if (error) return <p>Error : {error.message}</p>;
    
    return (
      <Container>
        <PageTitle />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <CardWrapper>
          {getFilteredPokemon().map((pokemon =>
          <PokeCard pokeKey={pokemon.key} pokeTypeNames={pokemon.types} pokeNum={pokemon.num} PokeImg={pokemon.sprite} />))}
        </CardWrapper>
      </Container>
  );
}