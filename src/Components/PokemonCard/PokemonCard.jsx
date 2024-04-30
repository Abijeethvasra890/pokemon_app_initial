import React from 'react'
import { Link } from 'react-router-dom'
import '../PokemonCard/PokemonCard.css'
import { getImageURL } from '../../Utils/pokemonUtils';

//Pokemon Card -> Displays the data of each pokemon in the form of Cards

const PokemonCard = ({pokemon, id}) => {
  const imageURL = getImageURL(id);

  return (
    <div className = "pokemon-card-container">
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <Link to={`/pokemons/${id}`}>
            <div className="btn btn-primary">Details</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard