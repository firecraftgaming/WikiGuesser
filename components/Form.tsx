import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

type FormObjectParams = {
    title: string;
}
class FormObject extends Component<FormObjectParams, {}> {
  constructor(props: FormObjectParams) {
    super(props);

  }

  render() {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.components}>
                {this.props.children}
            </View>
        </View>
    );
  }
}

type FormSwitchParams = {

}
class FormSwitch extends Component<FormSwitchParams, { on: boolean }> {
    constructor(props: FormSwitchParams) {
      super(props);
  
    }
  
    render() {
      return (
          <View style={styles.switch}><View style={styles.switchKnob}></View></View>
      );
    }
  }

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#C4C4C4',
        width: 315,
        height: 50,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 65,
        borderTopRightRadius: 65,

        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        left: 20,
        fontFamily: 'Robban',
        fontSize: 30
    },
    components: {
        position: 'absolute',
        right: 0
    },

    switch: {
        width: 80,
        height: 50,
        borderRadius: 65,
        borderWidth: 5,
        borderColor: '#863232',
        backgroundColor: '#333333',

        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    switchKnob: {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#863232',
    }
});

export { FormObject, FormSwitch }