import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Crown as CrownImage } from './images';

class Crown extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.crown}>
                <CrownImage/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    crown: {
        width: 40,
        height: 30,

        alignItems: 'flex-start',
        justifyContent: 'center'
    }
  });

export default Crown;