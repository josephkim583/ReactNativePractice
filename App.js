import React, { Component } from 'react';
// import SearchBar from 'react-native-searchbar';
import { AppRegistry, View, StatusBar } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'start',
        // alignItems: 'center',
      }}>
        {/* <SearchBar
          onChangeText={someMethod}
          onClear={someMethod}
          placeholder='Type Here...' /> */}
        <View style={{flex: 1, backgroundColor: 'powderblue', margin: 20}} />
        <View style={{flex: 1,   backgroundColor: 'skyblue',margin: 20}} />
        <View style={{flex: 1,  backgroundColor: 'steelblue',margin: 20}} />
        <View style={{flex: 1, backgroundColor: 'blue',margin: 20}} />
        <StatusBar hidden = {true}/>

      </View>
    );
  }
};

