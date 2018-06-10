import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    console.log('component will mount in Album list.');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      console.log('response is: ', response.data);
      this.setState({ albums: response.data });
    }).catch(((err) => {
      console.log('catch ', err);
    }));
  }
  render() {
    return (
      <View>
        <Text> Album List </Text>
      </View>
    );
  }
}

export default AlbumList;
