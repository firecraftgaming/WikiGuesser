import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Next } from './images';

type FormObjectParams = {
    title?: string;
    style?: any;
}
class FormObject extends Component<FormObjectParams, {}> {
  private style: any;

  constructor(props: FormObjectParams) {
    super(props);
    this.style = this.props.style ?? {};
  }

  render() {
    return (
        <View style={[styles.main, this.style]}>
            {
              this.props.title ? (<Text style={styles.title}>{this.props.title}</Text>) : null
            }
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
  public radios: Set<FormRadio> = new Set<FormRadio>();
  public value: string | null = null;

  public listeners: Map<string, Function> = new Map<string, Function>();

  public enable(radio: FormRadio, value: string) {
    for (let r of this.radios) {
      r.toggle(false);
    }
    this.value = value;
    this.listeners.forEach(v => v());
    radio.toggle(true);
  }
}


type FormRadioParams = {
  group: RadioGroup;
  value: string;
}
class FormRadio extends Component<FormRadioParams, { on: boolean }> {
  constructor(props: FormRadioParams) {
    super(props);
    this.state = {on: false};
  }

  componentDidMount() {
    this.props.group.radios.add(this);
  }

  componentWillUnmount() {
    this.props.group.radios.delete(this);
  }

  toggle(on: boolean) {
    this.setState({
      on
    });
  }

  activate() {
    this.props.group.enable(this, this.props.value);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.activate.bind(this)} >
        <View style={styles.radio}><View style={{...styles.radioKnob, display: this.state.on ? 'flex' : 'none'}}></View></View>
      </TouchableWithoutFeedback>
    );
  }
}

type FormSubmitParams = {
  onClick: Function;
  active: boolean;
}
class FormSubmit extends Component<FormSubmitParams, {}> {
  constructor(props: FormSubmitParams) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity disabled={!this.props.active} style={{...styles.button, backgroundColor: this.props.active ? '#32863A' : '#626262'}} activeOpacity={0.7} onPress={() => this.props.onClick()}>
        {
          this.props.active ? (
            <Next></Next>
          ) : null
        }
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
        borderWidth: 4,
        borderColor: '#863232',
        backgroundColor: '#333333',
        marginRight: 10,

        justifyContent: 'center'
    },
    switchKnob: {
        width: 26,
        height: 26,
        borderRadius: 65,
        margin: 3.5,
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
      

      justifyContent: 'center',
      alignItems: 'flex-end'
    }
});

export { FormObject, FormSwitch, FormRadio, RadioGroup, FormSubmit }