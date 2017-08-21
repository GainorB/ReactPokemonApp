import React from 'react';
import './App.css';

export default function Pokemon(props) {

    //console.log(props.pokemon)

    const renderPokemon = function(){
    return (
        props.pokemon.map((element, index) => {
            return (
                <li id={index} className="poke" key={index}>{element.name}</li>
            )
        })
    )
}
    return (
    <div id="pokemon">
        <span>POKEMONS</span>
        <ol>
            {renderPokemon()}
        </ol>
    </div>
    )
}