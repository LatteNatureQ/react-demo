import React,{Component} from 'react'
import {HashRouter, Switch, Link, Route} from 'react-router-dom'
import App from '../components/app'

class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default MyRouter