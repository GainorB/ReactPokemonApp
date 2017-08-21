import React from 'react';
import './App.css';

export default function PokeProfile(props){
    const renderAbilities = function(){
    return (
        props.ability.map((element, index) => {
            return (
                <h3 key={index}>{element.ability.name}</h3>
            )
        })
    )
}
    return (
        <div id="pokeprofile">
            <span>POKE PROFILE</span>
            <h3>name: {props.name}</h3>
            <h3>weight: {props.weight}</h3>
            <h3>height: {props.height}</h3>
            <h3>abilities:</h3>
            {renderAbilities()}
        </div>
    );
}