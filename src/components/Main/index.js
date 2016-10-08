import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import * as pageActions from '../../actions/MainActions'
import Item from './Item'

class Main extends Component {
    componentDidMount()	{
        this.props.pageActions.getPokemonsList("http://pokeapi.co/api/v1/pokemon/?limit=12");
        this.props.pageActions.getLikes();
    }
    
    onClickHandler(e) {
        e.preventDefault();
        this.props.pageActions.getAdditionalInfo("http://pokeapi.co/api/v1/pokemon/" + this.props.isSelected + "/");
    }

    GetAllPokemons(e) {
        e.preventDefault();
        this.props.pageActions.getPokemonsList("http://pokeapi.co/api/v1/pokemon/?limit=12");
    }
    
    GetLikedPokemons(e) {
        e.preventDefault();
        this.props.pageActions.getPokemonsList();
    }
    
    render() {
        let data = this.props.data;
        let pokemonsTemplate;
        if (data.length > 0) {
            pokemonsTemplate = data.map(function (item, index) {
                return (
                    <Item data={item} key={item.pkdx_id}/>
                )
            })
        } else {
            pokemonsTemplate = <li >К сожалению покемонов нет</li>
        }

        return (
            <div className="main">
                <div className="main-tab">
                    <button className="main-tab__button"
                            onClick={this.GetAllPokemons.bind(this)}
                    >All
                    </button>
                    <button className="main-tab__button"
                            onClick={this.GetLikedPokemons.bind(this)}
                    >Liked
                    </button> 
                </div>
                
                <ul className="main-pokemon_list">
                    {pokemonsTemplate}
                </ul>
                <button className="main__lead_more"
                        onClick={this.onClickHandler.bind(this)}
                >Lead More
                </button>
            </div>
        )
    }
}

function mapStateToProps (state)	{
    return	{
        isSelected: state.main.isSelected,
        data: state.main.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)