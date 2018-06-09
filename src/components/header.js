import React, { Component } from 'react';
import { Text } from "react-native";

const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}> Albums </Text>;
};
export default Header;

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
};
