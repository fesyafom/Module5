import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect }	from 'react-redux'
import Main from '../../components/Main'
import Info from '../../components/Info'

export default class App extends Component {
    render() {
        return (
            <div>
                <header className="header">
                   <h1 className="header__header">Pokedex</h1>
                </header>
                
                <main className="container clearfix">
                    <Main />
                    <Info />
                </main>
                
                <footer className="footer">
                    <div className="container">
                        © Module #5 a.feschenko 2016
                    </div>
                </footer>
            </div>
        )
    }
}


