<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 11-2: Componentes React - Concluído o/ o/ o/ :star:
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Na aula passada, você foi introduzido à biblioteca React e soube como criar um projeto React com o create-react-app.

Uma aplicação desenvolvida em React é composta de componentes. Ou seja, eles são as peças de lego que serão combinadas de forma a construir toda a aplicação! Logo, saber usar componentes é saber montar do zero uma aplicação React. A checagem de tipos é outra parte disso: ela economiza muito tempo de desenvolvimento, protegendo quem desenvolve de cometer erros facilmente evitáveis na utilização dos componentes.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, a Pokedex é uma enciclopédia de todos os pokemons na natureza.</p>

## :books: Exercícios

### 1°

Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.

Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você implemente pelo menos estes dois componentes:

- Pokemon: como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
  
  - nome do pokemon;
  - tipo do pokemon;
  - peso médio do pokemon, acompanhado da unidade de medida usada;
  - imagem do pokemon.
  
- Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

#### Resposta:

<div align="center">
  <img src="https://course.betrybe.com//front-end/react/components/my-pokedex-project.gif" alt="demo" height="300">
</div>

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// app.js
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

// pokedex.js
import React from 'react';
import Pokemon from './pokemon';

import '../styles/pokedex.css';

export default class Pokedex extends React.Component {
  render() {
    return (
      <div className="container-Pokedex">
        {this.props.pokemons.map(pokemon => {
          // console.log(<Pokemon key={pokemon.id} pokemon={pokemon} />);
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    );
  }
}

// pokemon.js
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/pokemon.css';

export default class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="container-Pokemon">
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>{`Peso: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} imagem pokemon`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

```

</details>

<p align="right">
   <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_11-2_Edu_Souza">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-app_react-orange">
    </a>&nbsp;
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
