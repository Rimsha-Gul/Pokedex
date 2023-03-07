import styled from "styled-components";
import Colors from "../../colors/colors";

const TypesWrapper = styled.ul` {
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    font-size: 14px;
    color: white;
    font-weight: bold;
    opacity: 0.8;
    text-shadow: 2px 2px 3px #000000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }`;

export default function PokeTypes({typenames}) {
    console.log(typenames);
    return (
        <TypesWrapper>
            {typenames.map((poketype => <Type type={poketype.name.toLowerCase()}>{poketype.name}</Type>))}
        </TypesWrapper>
    )
}