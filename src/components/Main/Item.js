import React, {Component} from    'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import PokemonTypes from './PokemonTypes'
import * as pageActions from '../../actions/MainActions'
import {
    URL_ONE_POKEMONE,
    URL_PICTURE_POKEMONE,
} from '../../constants/Sources'

class Item extends Component {
    onClickImg(e) {
        e.preventDefault();
        this.props.pageActions.selectPokemon(this.props.data.pkdx_id);
    };

    onClickLike(e) {
        e.preventDefault();
        this.props.pageActions.likePokemon(this.props.data.pkdx_id, URL_ONE_POKEMONE + this.props.data.pkdx_id + "/");
    }

    render() {
        let data = this.props.data;
        return (
            <li className={"item " + (data.pkdx_id	===	this.props.isSelected ? 'item_active':'')}>
                <img
                    className="item__img"
                    src={URL_PICTURE_POKEMONE + data.pkdx_id + ".png"}
                    onClick={this.onClickImg.bind(this)}
                />
                <h3 className="item__name">{data.name}</h3>
                <PokemonTypes data={data.types} />
                <i
                    className={"fa item__ico " + (this.props.isLiked.indexOf(this.props.data.pkdx_id) == -1 ? 'fa-heart-o':'fa-heart')}
                    aria-hidden="true"
                    onClick={this.onClickLike.bind(this)}
                />
            </li>
        )
    }
}

function mapStateToProps (state) {
    return	{
        isSelected: state.main.isSelected,
        isLiked: state.main.isLiked
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)