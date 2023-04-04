import styled from "styled-components";
import Colors from "../../colors/colors";
import PokeNumber from "../cardcomponents/PokeNumber";
import PokeImage from "../cardcomponents/PokeImage";
import PokeName from "../cardcomponents/PokeName";
import PokeTypes from "../cardcomponents/PokeTypes";

const Card = styled.a` {
    text-decoration: none;
    list-style: none;
    padding: 30px;
    width: 320px;
    background-image: linear-gradient(to bottom right, ${(props) => props.color1 ? Colors(props.color1) : "#ffd015"}, 
  ${(props) => props.color2 ? Colors(props.color2) : "#ffd015"});
    color: white;
    text-align: center;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: scale(1.04);
      transition: all 0.3s ease-in-out;
    }

    @media only screen and (max-width: 640px) {
      width: 240px;
    }
}`;

export default function PokeCard({pokeKey, pokeTypeNames, pokeNum, PokeImg}) {
    return (
        <Card href={'/pokedetails/'+pokeKey} color1={pokeTypeNames[0].name.toLowerCase()} color2={ pokeTypeNames.length === 2 ? pokeTypeNames[1].name.toLowerCase() : pokeTypeNames[0].name.toLowerCase()}>
            <PokeNumber number={pokeNum}/>
            <PokeImage pokesprite={PokeImg}/>
            <PokeName name={pokeKey}/>
            <PokeTypes typenames={pokeTypeNames}/>
        </Card>
    )
}