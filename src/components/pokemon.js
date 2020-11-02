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
