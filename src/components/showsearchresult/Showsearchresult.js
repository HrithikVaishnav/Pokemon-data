import React, { useState , useEffect } from 'react';
import './Showsearchresult.css';
const Showsearchresult = (props) => {
    const data = props.data;
   
    // showing the result for a particular pokemon
    const output =
        <div className="container">
            {data.map((poke) => (
                <div className="divdata" key={poke.name}>
                    <h1>{poke.name}</h1>
                    <div className="item">
                        <div className="item-name">Height :</div>
                        <div className="item-value">{Math.round(poke.height * 10)} cm</div>
                    </div>
                    <div className="item">
                        <div className="item-name">Base-Experience :</div>
                        <div className="item-value">{poke.base_experience}</div>
                    </div>
                    <div className="item">
                        <div className="item-name">Weight : </div>
                        <div className="item-value">{Math.round(poke.weight / 10)} kg</div>
                    </div>

                    <div className="item">
                        <div className="item-name">Game Indices :</div>
                        <div className="item-value">{poke.game_indices.length}</div>
                    </div>


                    <div className="avatar">
                        <div className="poke-item">
                            {poke.sprites["back_female"] ? <img alt="Not available" src={poke.sprites["back_female"]}/> : <p>Not available</p>}
                            <div>back side view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["back_shiny_female"] ? <img alt="Not available" src={poke.sprites["back_shiny_female"]}/> : <p>Not available</p>}
                            <div>back shiny view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["back_default"] ? <img alt="Not available" src={poke.sprites["back_default"]}/> : <p>Not available</p>}
                            <div>back default view pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["front_female"] ? <img alt="Not available" src={poke.sprites["front_female"]}/> : <p>Not available</p>}
                            <div>front view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["front_shiny_female"] ? <img alt="Not available" src={poke.sprites["front_shiny_female"]}/> : <p>Not available</p>}
                            <div>front shiny view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["back_shiny"] ? <img alt="Not available" src={poke.sprites["back_shiny"]}/> : <p>Not available</p>}
                            <div>back shiny view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["front_default"] ? <img alt="Not available" src={poke.sprites["front_default"]}/> : <p>Not available</p>}
                            <div>front default view of pokemone</div>
                        </div>

                        <div className="poke-item">
                            {poke.sprites["front_shiny"] ? <img alt="Not available" src={poke.sprites["front_shiny"]}/> : <p>Not available</p>}
                            <div>front shiny view of pokemone</div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    console.log(output);
    return (
        <>
            {output}
            <div className="btn-container">
                <button className="back-btn" onClick={props.backto}>back</button>
            </div>
        </>
    )
}

export default Showsearchresult;