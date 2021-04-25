import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        height: 40,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 65,
        borderTopRightRadius: 65,

        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        left: 10,
        fontFamily: 'Robban',
        fontSize: 25
    },
    components: {
        position: 'absolute',
        right: 0
    },

    switch: {
        width: 70,
        height: 40,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#FF0000',

        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    switchKnob: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FF0000',
    }
});

export { FormObject, FormSwitch }