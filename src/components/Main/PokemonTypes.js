import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import * as pageActions from '../../actions/MainActions'
import {BUTTON_COLOR} from '../../constants/Pokemon_Type_Colors'

class PokemonTypes extends Component {
    onClickImg(e) {
        e.preventDefault();
        console.log(e.target.textContent);
        this.props.pageActions.filterByType(e.target.textContent);
    };
    
    render() {
        const _this = this;
        let pokemonTypes;
        let data = this.props.data;
        if (data.length > 0) {
            pokemonTypes = data.map(function (item, index) {
                return (
                    <button
                        className={"item__ability " + "btn-" + (BUTTON_COLOR[item.name])}
                        key={index}
                        onClick={_this.onClickImg.bind(_this)}
                    >{item.name}
                    </button>
                )
            })
        } else {
            pokemonTypes = <span>-</span>
        }
        return (
            <div>
                {pokemonTypes}
            </div>
        );
    }
}

function mapStateToProps (state)	{
    return	{
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypes)