import React, { Component } from 'react';
import './App.css';

import Pokemon from './Pokemon';
import PokeProfile from './PokeProfile';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokemon: [],
      name: '',
      weight: '',
      height: '',
      ability: []
    }
        this.grabLI = this.grabLI.bind(this);
  }

  componentWillMount(){
    var getAllPokemon = "http://pokeapi.co/api/v2/pokemon?limit=151";

    axios.get(getAllPokemon)
      .then((data) => {
        //console.log(data);

        var pokemon = data.data.results;

        this.setState({ pokemon });
        this.grabLI();
    }).catch((err) => console.log(err));
  }

  grabLI = () => {
    //console.log("grabLi");
    
    document.querySelectorAll('.poke').forEach((element) => {
        //console.log(element);
        
        element.addEventListener('click', () => {
            let id = element.getAttribute('id');
            //console.log(`old id: ${id}`);

            var newIndex = (Number(id)+1);

            //console.log(`new index: ${newIndex}`)

            axios.get('http://pokeapi.co/api/v2/pokemon/'+newIndex).then((data) => {
              //console.log(data);

              this.setState({
                  name: data.data.name,
                  weight: data.data.weight,
                  height: data.data.height,
                  ability: data.data.abilities
              });
            }).catch((err) => console.log(err));
        })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Pokemon</h2>
        </div>
        <Pokemon pokemon={this.state.pokemon}/>
        <PokeProfile name={this.state.name}
                     weight={this.state.weight}
                     height={this.state.height}
                     ability={this.state.ability} />
      </div>
    );
  }
}