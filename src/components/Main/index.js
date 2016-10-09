import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from	'react-redux'
import * as pageActions from '../../actions/MainActions'
import Item from './Item'
import {
    URL_POKEMONES_LIST,
    URL_ONE_POKEMONE,
} from '../../constants/Sources'

class Main extends Component {
    componentDidMount()	{
        this.props.pageActions.getPokemonsList(URL_POKEMONES_LIST);
        this.props.pageActions.getLikes();
    }
    
    leadMore(e) {
        e.preventDefault();
        this.props.pageActions.getAdditionalInfo(URL_ONE_POKEMONE + this.props.isSelected + "/");
        
    }

    getAllPokemons(e) {
        e.preventDefault();
        this.props.pageActions.getPokemonsList(URL_POKEMONES_LIST);
    }
    
    getLikedPokemons(e) {
        e.preventDefault();
        this.props.pageActions.getPokemonsList();
    }
    
    render() {
        let data = this.props.data;
        let pokemonsTemplate;
        if(this.props.loaded === false) {
            pokemonsTemplate = <li >Loading...</li>
        }
        else if (data.length > 0) {
            pokemonsTemplate = data.map(function (item, index) {
                return (
                    <Item data={item} key={item.pkdx_id}/>
                )
            })
        } else {
            pokemonsTemplate = <li className="main-pokemon_list__empty">Unfortunately no Pokemons</li>
        }

        return (
            <div className="main">
                <div className="main-tab">
                    <button 
                            className={"main-tab__button " + (this.props.activeTab === 0 ? 'tab_active':'')}
                            onClick={this.getAllPokemons.bind(this)}
                    >All Pokemons
                    </button>
                    <button
                            className={"main-tab__button " + (this.props.activeTab === 1 ? 'tab_active':'')}
                            onClick={this.getLikedPokemons.bind(this)}
                    >Only Liked
                    </button> 
                </div>
                
                <ul className="main-pokemon_list">
                    {pokemonsTemplate}
                </ul>
                <button className="main__lead_more"
                        onClick={this.leadMore.bind(this)}
                        disabled={this.props.isSelected === 0}
                >Lead More
                </button>
            </div>
        )
    }
}

function mapStateToProps (state)	{
    return	{
        isSelected: state.oneItem.isSelected,
        activeTab: state.main.activeTab,
        data: state.main.data,
        loaded: state.main.loaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
