import React, { Component } from 'react'
import {View} from 'react-native'

import ArtistsList from '../components/artistslist'
import { styles } from '../styles'
import { getArtistList } from '../models/artist'

export default class HomeView extends Component {
  state = {
      artistlist: []
  }

  //Despues del que el componente se renderice
  componentDidMount()
  {
    getArtistList()
      .then( response => this.setState({
        artistlist: response
      }))
  }

  render() 
  {
    return (
      <View style = { styles.container }>
         <ArtistsList list = { this.state.artistlist } />
      </View>
    )
  }
}