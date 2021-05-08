import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import { FormObject } from "./Form";
import Crown from "./Crown";
import Minus from "./Minus";
import Plus from "./Plus";

interface Player {
    name: string;
    id: number;
}

interface ParticipantProps {
    name: string;
    removable?: boolean;
    remove?: Function;
    extra: any;
}

class Participant extends React.Component<ParticipantProps, {}> {
    constructor(props: ParticipantProps) {
      super(props);
    }
  
    render() {
        return (
            <View style={styles.participant}>
                <Text style={styles.participantText}>{this.props.name}</Text>
                {
                    this.props.extra?.host ? (
                        <Crown/>
                    ) :
                    this.props.removable ? (
                        <Minus onClick={() => this.props.remove ? this.props.remove() : null}/>
                    ) : null
                }
            </View>
        );
    }
}

class Separator extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
  
    render() {
        return (
            <View style={styles.separator}></View>
        );
    }
}

interface PlayerListProps<T> {
    DATA: T[];
    removable?: boolean | ((item: T, index: number) => boolean);
    removeCallback?: (index: number) => any;
    nameExtractor?: (item: T, index: number) => string;
    extraExtractor?: (item: T, index: number) => any;
}

class PlayerList<T> extends React.Component<PlayerListProps<T>, {}> {
    private list: FlatList | null = null;

    constructor(props: PlayerListProps<T>) {
        super(props);
    }

    scrollToEnd() {
        requestAnimationFrame(() => this.list?.scrollToEnd());
    }
  
    render() {
        return (
            <FlatList
                contentInset={{ bottom: 16 }}
                ref={v => this.list = v}
                data={this.props.DATA}
                renderItem={({item, index}) => (
                    <Participant
                        name={this.props.nameExtractor ? this.props.nameExtractor(item, index) : String(item)}
                        extra={this.props.extraExtractor ? this.props.extraExtractor(item, index) : null}
                        remove={() => (this.props.removeCallback ? this.props.removeCallback(index) : null)}
                        removable={this.props.removable === undefined ? false : (typeof this.props.removable === 'boolean') ? this.props.removable : this.props.removable(item, index)}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
                style={styles.participantlist}
                ItemSeparatorComponent={Separator}
            />
        );
    }
}

class LocalMultiplayerView extends Component<{ DATA: string[], onChange: Function }, { participantName: string }> {
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
  

export { Participant, Separator, PlayerList, LocalMultiplayerView, Player };