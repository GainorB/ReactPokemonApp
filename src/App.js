import axios from 'axios';
import React, { Component } from 'react';

// components
import Pokemon from './Pokemon';
import PokeProfile from './PokeProfile';

// css
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokemon: [],
      name: '',
      weight: '',
      height: '',
      image: '',
      ability: [],
      gotPokemon: false,
      gotSinglePokemon: false
    }

        this.grabLI = this.grabLI.bind(this);
  }

  componentDidMount(){
    const endpoint = "http://pokeapi.co/api/v2/pokemon?limit=151";

    axios.get(endpoint)
      .then(pokemon => {

        this.setState({ pokemon: pokemon.data.results, gotPokemon: true });
        this.grabLI();
    })
    .catch(err => console.log(err));
  }

  grabLI = () => {
    
    document.querySelectorAll('.poke').forEach(element => {
        element.addEventListener('click', () => {
            let id = element.getAttribute('id');

            var newIndex = (Number(id)+1);

            axios.get('http://pokeapi.co/api/v2/pokemon/'+newIndex)
            .then(pokemon => {
              this.setState({
                  name: pokemon.data.name,
                  weight: pokemon.data.weight,
                  height: pokemon.data.height,
                  ability: pokemon.data.abilities,
                  image: pokemon.data.sprites.front_default,
                  gotSinglePokemon: true
              })})
            .catch((err) => console.log(err));
        });
    });
  }

  toggleSinglePokemon(){
    this.setState({ gotSinglePokemon: false });
  }

  render() {
    const { pokemon, name, weight, height, ability, image, gotPokemon, gotSinglePokemon } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>React Pokemon</h2>
        </div>
        <Pokemon 
          pokemon={pokemon}
          gotPokemon={gotPokemon}
          toggleSinglePokemon={this.toggleSinglePokemon}
        />
        <PokeProfile 
          name={name}
          weight={weight}
          height={height}
          ability={ability} 
          image={image}
          gotSinglePokemon={gotSinglePokemon}
        />
      </div>
    );
  }
}