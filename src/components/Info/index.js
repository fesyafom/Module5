import React, {Component} from 'react'
import { connect } from	'react-redux'
import PokemonTypes from './PokemonTypes'

class Info extends Component {
    render() {
        let data = this.props.data;
        if (Object.keys(data).length !== 0) {
            var present = <div className="info">
                <img
                    className="item__img"
                    src={"http://pokeapi.co/media/img/" + data.pkdx_id + ".png"}
                />
                <h3 className="item__name">{data.name}</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Type</td>
                        <td><PokemonTypes data={data.types}/></td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{data.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{data.defense}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>{data.hp}</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>{data.sp_atk}</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>{data.sp_def}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{data.speed}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{data.weight}</td>
                    </tr>
                    <tr>
                        <td>Total Moves</td>
                        <td>{data.moves.length}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        } 
        
        else present = "Please select Pokemon for more information";

        return (
            <div>{present}</div>
        )
    }
}

function mapStateToProps (state) {
    return	{
        data: state.main.pokemon_info
    }
}

export default connect(mapStateToProps)(Info)

