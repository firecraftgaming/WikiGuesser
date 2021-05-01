import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Plus as PlusImage } from './images';

type PlusProps = {
    onClick: Function
}

class Plus extends Component<PlusProps, {}> {
    constructor(props: PlusProps) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.plus}
                onPress={_ => this.props.onClick()}
                >
                <PlusImage/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    plus: {
      position: 'absolute',
      top: 35,
      left: 300,
  
      width: 60,
      height: 60,
  
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default Plus;