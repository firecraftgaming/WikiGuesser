import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

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
                <Image
                    source={require('../Back.png')} />
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
      justifyContent: 'center'
    }
  });

export default Back;