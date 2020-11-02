import React from 'react';
import Pokemon from './pokemon';

import '../styles/pokedex.css';

export default class Pokedex extends React.Component {
  render() {
    return (
      <div className="container-Pokedex">
        {this.props.pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
