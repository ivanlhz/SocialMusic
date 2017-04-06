import {StyleSheet,Platform} from 'react-native'

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#CCC',
            ...Platform.select({
                ios:{
                    paddingTop: 60
                }
            })
        }
}) 

export {styles}
