import React from 'react';

const Pokemon = props => {

    const renderPokemon = () => {
        return (
            props.pokemon.map((element, index) => {
                return (
                    <li id={index} className="poke" key={index}>{element.name}</li>
                );
            })
        );
    }

    if(props.gotPokemon === true){
        return (
            <div id="pokemon">
                <span>POKEMONS</span>
                <ol>
                    {renderPokemon()}
                </ol>
            </div>
        );
    } else {
        return (
            <div id="pokemon">
                Loading..
            </div>
        );
    }
}

export default Pokemon;