import React from 'react'
import { View } from 'react-native';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';


export default class Card extends React.PureComponent {
    render () {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source= {require('../assets/favicon.png')}></Image>
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>{this.props.item.fullName}</Text>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.house}>{this.props.item.family}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    cardImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    imageContainer: {
        borderRadius: 10,
        borderColor: 'gold',
        borderWidth: 1,
        overflow: 'hidden'
    },
    container: {
        height: 150,
        backgroundColor: 'black',
        flexDirection: 'row',
        margin: 5,
        borderRadius: 10,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 5,
        shadowOffset: {
            width: 3,
            height: 3,
        }
    },
    info: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    name: {
        fontSize:15, 
        fontWeight:'bold',
        color: 'gold',
        textTransform: 'uppercase'
    },
    title: {
        fontSize:12, 
        fontWeight:'bold',
        color: 'silver',
        marginTop: 10,
    },
    house: {
        fontSize:14, 
        fontWeight:'bold',
        color: 'white',
        position: 'absolute',
        bottom: 0,
    }
});
