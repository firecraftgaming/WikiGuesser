import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Back as BackImage } from './images';

type BackProps = {
    onClick: Function
}

class Back extends Component<BackProps, {}> {
    constructor(props: BackProps) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.back}
                onPress={_ => this.props.onClick()}
                >
                <BackImage/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    back: {
      position: 'absolute',
      top: 0,
      left: 0,
  
      width: 60,
      height: 60,
  
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  });

export default Back;