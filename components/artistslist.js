import React, { Component } from 'react'
import { ListView , TouchableOpacity} from 'react-native'
import ArtistBox from './artistbox'
import { Actions } from 'react-native-router-flux'

export default class ArtistsList extends Component{
    constructor(props)
    {
        super(props)
        const ds = new ListView.DataSource( { rowHasChanged: (r1, r2) => r1 !== r2 } );
        this.state = {
            dataSource: ds 
        };
    }

    //Actualiza los datos
    updateData(data){
        this.setState({
             dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    //Nos lleva a la vista donde podemos ver los detalles del artista
    handlePress(artist){
        Actions.artistDetail({ artist:artist })
    }
    //Antes de renderizar el componente
    componentDidMount()
    {
        this.updateData(this.props.list)
    }

    //Cuando recibe nuevas props
    componentWillReceiveProps(newProps)
    {
        if(this.props.list !== newProps.list)
        {
            this.updateData(newProps.list)
        }
    }

    render()
    {
        return (
        <ListView 
            enableEmptySections={true}
            dataSource = {this.state.dataSource}
            renderRow = { (artist) => {
                    return(
                        <TouchableOpacity onPress={ () => this.handlePress(artist) }>
                            <ArtistBox artist = { artist } /> 
                        </TouchableOpacity>
                    )
                }
            }
        />
        )
    }
}
