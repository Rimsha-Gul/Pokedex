import styled from "styled-components";

const PokeSearchBar = styled.div` {
    margin: 0 auto;
    width: 480px;
    height: 24px;
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }`;

  const SearchInput = styled.input` {
    font-size: 16px;
    line-height: 1;
    border: none;
    margin-left: 16px;
    background-color: #f5f5f5;
    outline: none;
    width: 100%;
    border: 1px solid transparent;
  
    &:focus,
    &:active {
      outline: none;
    }
  }`;

export default function SearchBar({searchValue, setSearchValue}) {
    return (
        <PokeSearchBar>
            <SearchInput
            type='search'
            placeholder='Search pokémon'
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value)}}
            ></SearchInput>
        </PokeSearchBar>
    )
}
  