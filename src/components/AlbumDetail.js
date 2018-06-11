import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumDetail extends Component {
  render() {
    const { title } = this.props.album;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}
export default AlbumDetail;
