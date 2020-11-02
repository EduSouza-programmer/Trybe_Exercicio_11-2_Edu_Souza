import dataPokemons from '../DB_pokemons/data';
import Pokedex from './pokedex';

import '../styles/app.css';

export default function App() {
  return (
    <div className="conteinerApp">
      <h1>My Pokedex!</h1>
      <Pokedex pokemons={dataPokemons} />
    </div>
  );
}
