import React, {Component} from 'react'
import {
  Text,
  View,
  Button,
  Image
} from 'react-native'
import {styles} from '../styles/artistbox'
import Icon from 'react-native-vector-icons/Ionicons'

class ArtistBox extends Component{

    render(){
        const{ image,name, likes, comments} = this.props.artist

        return(
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }}></Image>
                <View style={styles.info}> 
                    <View style={[styles.box,styles.infoHeader]}>
                        <Text style={styles.artist}>{name}</Text>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.votes}>
                            <Icon name="ios-heart-outline" size={30} color="lightgrey" />
                            <Text style={styles.textgrey}>{likes}</Text>
                        </View>
                        <View style={styles.votes}>
                            <Icon name="ios-chatboxes-outline" size={30} color="lightgrey" />
                            <Text style={styles.textgrey}>{comments}</Text>
                        </View>
                    </View>
                </View>
            </View>   
        )    
    }
}

export default ArtistBox