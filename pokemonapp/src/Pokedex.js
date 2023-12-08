import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h4> Winning Player - </h4>
    } else {
      title = <h4> Losing Player - </h4>
    }
    return (
      <div className="Pokedex">
        {/* <h1>Poke</h1> */}
        <h4>{title} Total Exp: {this.props.exp} </h4>
        <div className="Pokedex-cards">
          {this.props.pokemon?.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
