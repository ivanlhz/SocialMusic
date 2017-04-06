import React, { Component } from 'react'
import {View} from 'react-native'

import ArtistBox from '../components/artistbox'
import { getArtistList } from '../models/artist'
import { styles } from '../styles/artistdetails'

export default class artistDetailView extends Component {
    render() 
    {
        const artist =  this.props.artist
        return (
        <View style={styles.container} >
            <ArtistBox artist = { artist } />
        </View>
        )
    }
}