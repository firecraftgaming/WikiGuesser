import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Settings as SettingsImage } from './images';

type SettingsProps = {
    onClick: Function
}

class Settings extends Component<SettingsProps, {}> {
    constructor(props: SettingsProps) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.settings}
                onPress={_ => this.props.onClick()}
                >
                <SettingsImage/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
      position: 'absolute',
      top: 0,
      right: 0,

      width: 60,
      height: 60,

      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default Settings;