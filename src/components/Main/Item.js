import React, {Component} from    'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import * as pageActions from '../../actions/MainActions'

class Item extends Component {
    onClickImg(e) {
        e.preventDefault();
        this.props.pageActions.selectPokemon(this.props.data.pkdx_id);
    };

    onClickLike(e) {
        e.preventDefault();
        this.props.pageActions.likePokemon(this.props.data.pkdx_id, "http://pokeapi.co/api/v1/pokemon/" + this.props.data.pkdx_id + "/");
    }

    render() {
        let pokemonsTemplate;
        let data = this.props.data;
        if (data.types.length > 0) {
            pokemonsTemplate = data.types.map(function (item, index) {
                return (
                    <button className="item__ability" key={index}>{item.name}</button>
                )
            })
        } else {
            pokemonsTemplate = <span>-</span>
        }
        
        
        return (
            <li className={"item " + (data.pkdx_id	===	this.props.isSelected ? 'item_active':'')}>
                <img
                    className="item__img"
                    src={"http://pokeapi.co/media/img/" + data.pkdx_id + ".png"}
                    onClick={this.onClickImg.bind(this)}
                />
                <h3 className="item__name">{data.name}</h3>
                {pokemonsTemplate}
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