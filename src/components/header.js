import React from 'react';
import { Text, View } from "react-native";

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> Albums </Text>
        </View>
    );
};
export default Header;

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
    },
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });