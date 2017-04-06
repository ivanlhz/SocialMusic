import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
        artistBox:{
            margin:5,
            flexDirection:'row',
            shadowColor: 'black',
            shadowOpacity: .8,
            shadowOffset:{
                height:1,
                width:2
            },
            elevation: 4,
            backgroundColor:'white'
        },
        image:{
            width: 100,
            height: 100
        },
        info:{
            flex: 1,
            flexDirection:'column',
            justifyContent: 'center'
        },
        infoHeader:{
          marginBottom: 10
        },
        box:{
            justifyContent: 'center',
            flexDirection:'row'
        },
        artist:{
            fontSize: 20,
            color: 'black',
        },
        votes:{
            flex:1,
            alignItems: 'center'
        },
        textgrey:{
            color: 'lightgrey'
        }

}) 

export {styles}
