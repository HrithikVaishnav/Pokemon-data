import React, { useState,useEffect } from "react";
import './Pokemon.css';

const Pokemon = ({pokemon , viewPokemon}) => {
    
    //console.log(pokemon);
    return(
        <div className="pokemon">
            {
                pokemon.map(p =>(
                    <div className="container-item" key={p.name} value={p.name}>
                        <p>{p.name}</p>
                        <button onClick={() => viewPokemon(p.name)}>view</button>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Pokemon;