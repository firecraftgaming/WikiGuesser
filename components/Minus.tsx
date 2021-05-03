import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Minus as MinusImage } from './images';

type MinusProps = {
    onClick: Function
}

class Minus extends Component<MinusProps, {}> {
    constructor(props: MinusProps) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.minus}
                onPress={_ => this.props.onClick()}
                >
                <MinusImage/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    minus: {
        width: 40,
        height: 30,

        alignItems: 'flex-start',
        justifyContent: 'center'
    }
  });

export default Minus;