import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import IndexApp from "./views/IndexApp.js"
import {connect} from 'react-redux'
import { ConnectedRouter } from "connected-react-router"
import { history } from "./redux/store";
import "./index.scss";
import Layout from "./components/layout/Layout";

class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Layout>
                    <Switch>
                        <Route path={"/"} component={IndexApp}/>
                    </Switch>
                </Layout>
            </ConnectedRouter>
        );
    }
}


export default connect(
    null,
    null
)(App);
