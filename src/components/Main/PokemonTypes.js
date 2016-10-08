import React, {Component} from 'react'

export default class PokemonTypes extends Component {
    render() {
        let pokemonTypes;
        let data = this.props.data;
        if (data.length > 0) {
            pokemonTypes = data.map(function (item, index) {
                return (
                    <button className="item__ability" key={index}>{item.name}</button>
                )
            })
        } else {
            pokemonTypes = <span>-</span>
        }

        return (
            <span>
                {pokemonTypes}
            </span>
        );
    }
}
