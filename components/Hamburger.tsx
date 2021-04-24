import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, Alert} from "react-native";
import Drawer from "react-native-drawer";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = {
    view: any,
    onOpen: any,
    onClose: any,
}

class Hamburger extends Component<Props, {open: boolean}> {
    private drawer: Drawer | null = null;

    constructor(props: Props) {
        super(props);
        this.setState({
            open: false
        });
    }

    public static propTypes = {
        view: undefined
    }

    onOpen() {
        this.setState({
            open: true
        });
        (this.props as any).onOpen();
    }

    onClose() {
        this.setState({
            open: false
        });
        (this.props as any).onClose();
    }

    open() {
        this.drawer?.open();
    }

    render() {
        return (
            <Drawer
            type="overlay"
            ref={(ref) => {
                this.drawer = ref;
            }}
            onClose={this.onClose.bind(this)}
            onOpen={this.onOpen.bind(this)}
            content={
                <View style={styles.sideBarParent}>
                    <TouchableOpacity
                        style={styles.closeParent}
                        onPress={_ => this.drawer?.close()}>
                        <Image
                            style={styles.close}
                            source={require('../HamburgerClose.png')} />
                    </TouchableOpacity>
                    {this.props.children}
                </View>
            }
            tapToClose={true}
            openDrawerOffset={0.35}
            side='right'
            styles={DrawerStyles}
            tweenDuration={(100)}
            tweenEasing={'easeInQuad'}
            acceptPan={false}
        >
                {(this.props as any).view}
        </Drawer>
        );
    }
}

/*
<TouchableOpacity
        style={styles.sidebarbutton}
        onPress={_ => this.navigation.push('Settings')}
        
    >
        <Text style={styles.text}>Join</Text>
    </TouchableOpacity>
*/

const DrawerStyles = {
    drawer: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRightWidth: 2,
      borderColor: 'rgba(34, 34, 34, 1)',
      shadowColor: '#000',
      shadowOpacity: 0.58,
      shadowOffset: {
        width: 5,
        height: 0
      }
    },
    main: {

    }
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.dark.background
    },
    sideBarParent: {
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    logo: {
      position: 'absolute',
      top: 15,
      right: 15,
    },
    logoParent: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 65,
      height: 60
    },
    close: {
      position: 'absolute',
      top: 15,
      left: 15
    },
    closeParent: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 60,
      height: 60
    },
    text: {
      fontFamily: 'Robban',
      fontSize: 40,
  
      width: 250,
      height: 40,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#DDDDDD',
      width: 250,
      height: 55,
      margin: 12.5,
      borderRadius: 10,
      borderWidth: 0,
      justifyContent: 'center'
    },
    sidebarbutton: {
      backgroundColor: '#DDDDDD',
      width: 175,
      height: 55,
      marginTop: 25,
      padding: 0,
      borderRadius: 10,
      textAlign: 'center',
      alignItems: 'center', 
      justifyContent: 'center'
    },
});

export { Hamburger };