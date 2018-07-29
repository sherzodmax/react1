import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                </Switch>

            </BrowserRouter>

        )
    }
}

export default App