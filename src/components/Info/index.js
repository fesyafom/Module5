import React, {Component} from 'react'
import { connect } from	'react-redux'
import PokemonTypes from './PokemonTypes'
import {
    URL_PICTURE_POKEMONE
} from '../../constants/Sources'


class Info extends Component {
    render() {
        let data = this.props.pokemon_info;
        if (Object.keys(data).length !== 0) {
            var present = <div className="info-content">
                <img
                    className="info-content__img"
                    src={URL_PICTURE_POKEMONE + data.pkdx_id + ".png"}
                />
                <h3 className="info-content__name">{data.name}</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="table__cell">Type</td>
                        <td className="table__cell"><PokemonTypes data={data.types}/></td>
                    </tr>
                    <tr>
                        <td className="table__cell">Attack</td>
                        <td className="table__cell">{data.attack}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">Defense</td>
                        <td className="table__cell">{data.defense}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">HP</td>
                        <td className="table__cell">{data.hp}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">SP Attack</td>
                        <td className="table__cell">{data.sp_atk}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">SP Defense</td>
                        <td className="table__cell">{data.sp_def}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">Speed</td>
                        <td className="table__cell">{data.speed}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">Weight</td>
                        <td className="table__cell">{data.weight}</td>
                    </tr>
                    <tr>
                        <td className="table__cell">Total Moves</td>
                        <td className="table__cell">{data.moves.length}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        } 
        
        else present = "";

        return (
            <div className="info">{present}</div>
        )
    }
}

function mapStateToProps (state) {
    return	{
        pokemon_info: state.oneItem.pokemon_info
    }
}

export default connect(mapStateToProps)(Info)

