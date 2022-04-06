import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../screens/HomeScreen/Home'
import Login from '../screens/LoginScreen/Login'

function Routes() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="login" component={Login} title="About" />
            </Scene>
        </Router>
    );
}
export default Routes