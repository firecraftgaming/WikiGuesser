import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Next } from './images';

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

type ColorsOption = {
  on: string,
  off: string
}

type FormSwitchParams = {
  colors?: ColorsOption
}
class FormSwitch extends Component<FormSwitchParams, { on: boolean }> {
    public colors: ColorsOption = {
      on: '#32863A',
      off: '#863232'
    };

    constructor(props: FormSwitchParams) {
      super(props);
      if (props.colors) this.colors = props.colors;
      this.state = {on: false};
    }
  
    render() {
      return (
        <TouchableWithoutFeedback
          onPress={() => this.setState({
            on: !this.state.on
          })}>
          <View style={{
            ...styles.switch, 
            alignItems: this.state.on ? 'flex-end' : 'flex-start', 
            borderColor: this.state.on ? this.colors.on : this.colors.off
            }}>
              <View style={{
                ...styles.switchKnob, 
                backgroundColor: this.state.on ? this.colors.on : this.colors.off}}></View>
          </View>
        </TouchableWithoutFeedback>   
      );
    }
}

class RadioGroup {
  public radios: FormRadio[] = [];

  public enable(radio: FormRadio) {
    for (let r of this.radios) {
      r.toggle(false);
    }
    radio.toggle(true);
  }
}


type FormRadioParams = {
  group: RadioGroup
}
class FormRadio extends Component<FormRadioParams, { on: boolean }> {
  constructor(props: FormRadioParams) {
    super(props);
    this.state = {on: false};
    this.props.group.radios.push(this);
  }

  toggle(on: boolean) {
    this.setState({
      on
    });
  }

  activate() {
    this.props.group.enable(this);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.activate.bind(this)} >
        <View style={styles.radio}><View style={{...styles.radioKnob, display: this.state.on ? 'flex' : 'none'}}></View></View>
      </TouchableWithoutFeedback>
    );
  }
}

type FormButtonParams = {
}
class FormButton extends Component<FormButtonParams, {}> {
  constructor(props: FormButtonParams) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Next></Next>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#C4C4C4',
        width: 315,
        height: 50,
        margin: 5,
        borderRadius: 10,

        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        left: 10,
        fontFamily: 'Robban',
        fontSize: 30
    },
    components: {
        position: 'absolute',
        right: 0
    },

    switch: {
        width: 70,
        height: 40,
        borderRadius: 65,
        borderWidth: 3,
        borderColor: '#863232',
        backgroundColor: '#333333',
        marginRight: 10,

        justifyContent: 'center'
    },
    switchKnob: {
        width: 28,
        height: 28,
        borderRadius: 65,
        margin: 2.5,
        backgroundColor: '#863232',
    },
    
    radio: {
      width: 40,
      height: 40,
      borderRadius: 65,
      borderWidth: 5,
      borderColor: '#626262',
      backgroundColor: '#333333',
      marginRight: 10,

      justifyContent: 'center',
      alignItems: 'center',
    },
    radioKnob: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#32863A',
    },
    button: {
      width: 330,
      height: 55,
      borderRadius: 10,
      backgroundColor: '#32863A', // gray=#626262

      justifyContent: 'center',
      alignItems: 'center',

      position: 'absolute',
      bottom: 0,
    }
});

export { FormObject, FormSwitch, FormRadio, RadioGroup, FormButton }