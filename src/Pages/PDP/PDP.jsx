import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import { fetchData, getImageURL } from '../../Utils/pokemonUtils';
import '../PDP/PDP.css'

//PDP - Pokemon Details Page -> Displays the details of the selected pokemons

const PDP = () => {
  const { id } = useParams();
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const imageURL = getImageURL(id);
  //console.log(apiURL);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData(apiURL);
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      } 
    };
    fetchDataAsync();
  }, [apiURL]);

  const pokemonData = data;
  
  return (
    <>
    <Navbar/>
    <div className="pdp-container">
      {pokemonData && (
        <div className="pokemon-details">
        <center><h3>Pokemon Details - {pokemonData.name}</h3>
          <img className='pokemon-img' src={imageURL} alt={pokemonData.name} /></center>
          <table className='table-container'> 
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{pokemonData.name}</td>
            </tr>
            <tr>
              <td><strong>Abilities:</strong></td>
              <td>
                <ul>
                  {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Base Experience:</strong></td>
              <td>{pokemonData.base_experience}</td>
            </tr>
            <tr>
              <td><strong>Height:</strong></td>
              <td>{pokemonData.height}</td>
            </tr>
            <tr>
              <td><strong>Weight:</strong></td>
              <td>{pokemonData.weight}</td>
            </tr>
          </tbody>
        </table>
        </div>
      )}
    </div>
    </>
  )
}

export default PDP