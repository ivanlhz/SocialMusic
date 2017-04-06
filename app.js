import React, { Component } from 'react'
import {  Router, Scene } from 'react-native-router-flux'
import HomeView from './components/homeview'

export default class SocialMusic extends Component{
    render(){
        return (
            <Router>
                <Scene key="home" component={HomeView} title="Home" hideNavBar="true" />
            </Router>
        )
    }
}