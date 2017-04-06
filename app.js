import React, { Component } from 'react'
import {  Router, Scene } from 'react-native-router-flux'
import { Platform } from 'react-native' //Para detectar donde se esta ejecutando
import HomeView from './components/homeview'
import ArtistDetailView from './components/artistdetailview'

export default class SocialMusic extends Component{

    isAndroid()
    {
        return Platform.OS === 'android'
    }

    render(){
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={HomeView} hideNavBar />
                    <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={this.isAndroid()} />
                </Scene>
            </Router>
        )
    }
}