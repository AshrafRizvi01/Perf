import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import Card from './src/CharacterListItem';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this._get('https://thronesapi.com/api/v2/Characters').then( 
    data => {
      this.setState({items: data})
    })
  }

  _get = async (endpoint) => {
        const res = await fetch(endpoint);
        const data = await res.json();
        return data;
      }

  render() {
    if (this.state.items.length===0) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator animating={true} size='large' color={'black'}></ActivityIndicator>
        </View>
      )
    }
    return (
          <View>
            <SafeAreaView style={styles.container}>
            <View style={{flex:2, flexDirection: 'row', padding:20, alignItems: 'center',}}>
              <Image source = {require('./assets/favicon.png')}/>
              <Text style= {{fontSize:20, fontWeight:'bold', marginStart: 20}}>PER</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row-reverse', padding:20, alignItems: 'center',}}>
              <Image source = {require('./assets/favicon.png')}/>
            </View>
            </SafeAreaView>
            <FlatList style={styles.flatlist} 
            data={this.state.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Card item={item}/>}>
            </FlatList>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: 'gold',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatlist: {

  }
});
