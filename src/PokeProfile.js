import React from 'react';

const PokeProfile = props => {

    const renderAbilities = () => {
        return (
            props.ability.map((element, index) => {
                return (
                    <h3 key={index}>{element.ability.name}</h3>
                );
            })
        );
    }

    if(props.gotSinglePokemon === true){
        return (
            <div id="pokeprofile">
                <span>POKE PROFILE</span><br/>
                <img className="pokeSprite" src={props.image} alt={props.name} />
                <h3>name: {props.name}</h3>
                <h3>weight: {props.weight}</h3>
                <h3>height: {props.height}</h3>
                <h3>abilities:</h3>
                {renderAbilities()}
            </div>
        );
    } else {
        return (
            <div id="pokeprofile">
                <img className="loading" src="https://cdn.dribbble.com/users/4874/screenshots/2138265/pokebiome007_gif.gif" alt="Loading" />
            </div>
        );
    }
}

export default PokeProfile;