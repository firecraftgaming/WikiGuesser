import React, { Component } from "react";
import { Keyboard, TextInput, View, StyleSheet } from "react-native";
import { FormObject } from "./Form";
import { PlayerList } from "./Participant";
import Plus from "./Plus";

export class LocalMultiplayerView extends Component<{ DATA: string[], onChange: Function }, { participantName: string }> {
    private list = React.createRef<PlayerList<string>>();

    constructor(props: { DATA: string[], onChange: Function }) {
        super(props);
        this.state = {
            participantName: ''
        }
    }
    add(name: string) {
        if (name.trim().length < 1) return;

        this.props.DATA.push(name);
        requestAnimationFrame(() => this.list.current?.scrollToEnd());
        if (this.props.onChange) this.props.onChange();
    }
    remove(index: number) {
        this.props.DATA.splice(index, 1);
        this.list.current?.forceUpdate();
        if (this.props.onChange) this.props.onChange();
    }
    clear() {
        Keyboard.dismiss();
        this.setState({participantName: ''});
    }
    render() {
        return (
            <View>
                <FormObject>
                    <TextInput value={this.state.participantName} placeholder="Participant" placeholderTextColor="#C4C4C4" style={styles.participantinput} onChangeText={v => this.setState({participantName: v})}/>
                    <Plus onClick={() => {
                        this.add(this.state.participantName);
                        this.clear();
                    }}/>
                </FormObject>
                <PlayerList
                    ref={this.list}
                    DATA={this.props.DATA}
                    removable={true}
                    removeCallback={this.remove.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    participantinput: {
        borderRadius: 8,

        width: 265,
        height: 40,

        paddingLeft: 10,
        fontSize: 23,
        color: '#C4C4C4',

        margin: 45,
        backgroundColor: "#626262",
    },

    participantlist: {
        backgroundColor: "#626262",
        color: "#C4C4C4",

        height: 190,
        width: 315,

        paddingTop: 8,


        flexGrow: 0,
        alignSelf: 'center',
        borderRadius: 10,
    },

    participant: {
        height: 30,

        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
    },

    participantText: {
        lineHeight: 30,
        fontSize: 25,
        color: "#C4C4C4",
        paddingLeft: 10,
    },

    separator: {
        width: 315,
        height: 2,
        backgroundColor: "#C4C4C4",
        marginTop: 8,
        marginBottom: 8,
        
    },

    crown: {
        alignSelf: 'center',
        marginRight: 25,
    }
});