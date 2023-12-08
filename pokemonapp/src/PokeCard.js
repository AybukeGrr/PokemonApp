import React, { Component } from "react";
import "./PokeCard.css";

const POKE_API_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API_URL}${this.props.id}.png`;
    return (
      <div className="PokeCard">
        <h1 className="PokeCard-title">{this.props.name}</h1>
        <div className="PokeCard-img">
          <img src={imgSrc} alt={this.props.name}/>
        </div>
        <div className="PokeCard-data"> Type: {this.props.type} </div> 
        <div className="PokeCard-data"> Exp: {this.props.exp} </div>
      </div>
    );
  }
}

export default PokeCard;
