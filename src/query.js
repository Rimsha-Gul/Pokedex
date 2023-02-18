import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query (
    $offset: Int,
    $take: Int,
    $reverse: Boolean,
    $offsetFlavorTexts: Int,
    $takeFlavorTexts: Int,
    $reverseFlavorTexts: Boolean
    ) {
      getAllPokemon(
        offset: $offset,
        take: $take,
        reverse: $reverse,
        offsetFlavorTexts: $offsetFlavorTexts,
        takeFlavorTexts: $takeFlavorTexts,
        reverseFlavorTexts: $reverseFlavorTexts
      ) {
        color
        key
        num
        sprite
        types {
          name
        }
      }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  
query (
  $pokemon: PokemonEnum!
  $offsetFlavorTexts: Int
  $takeFlavorTexts: Int
  $reverseFlavorTexts: Boolean
) {
  getPokemon(
    pokemon: $pokemon
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    abilities {
      first {
        key
        shortDesc
      }
      hidden {
        key
        shortDesc
      }
      second {
        key
        shortDesc
      }
      special {
        key
        shortDesc
      }
    }
    backSprite
    baseStats {
      defense
      hp
      attack
      specialattack
      specialdefense
      speed
    }
    baseStatsTotal
    catchRate {
      base
      percentageWithOrdinaryPokeballAtFullHealth
    }
    eggGroups
    flavorTexts {
      flavor
      game
    }
    forme
    gender {
      female
      male
    }
    height
    isEggObtainable
    key
    levellingRate
    maximumHatchTime
    minimumHatchTime
    num
    shinyBackSprite
    shinySprite
    sprite
    types {
      name
    }
    weight
  }
}
`;