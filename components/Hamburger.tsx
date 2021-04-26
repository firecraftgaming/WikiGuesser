import React, { Component } from "react";
import Drawer from "react-native-drawer";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

type HamburgerProps = {
    view: any;
    onOpen: Function;
    onClose: Function;
}
class Hamburger extends Component<HamburgerProps, {open: boolean}> {
    private drawer: Drawer | null = null;

    constructor(props: HamburgerProps) {
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
            onOpenStart={this.onOpen.bind(this)}
            content={
                <View style={styles.sideBarParent}>
                    <TouchableOpacity
                        style={styles.closeParent}
                        onPress={_ => this.drawer?.close()}>
                        <Image
                            style={styles.close}
                            source={require('../HamburgerClose.png')} />
                    </TouchableOpacity>
                    <View style={styles.sidebarButtons}>
                      {this.props.children}
                    </View>
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
                {this.props.view}
        </Drawer>
        );
    }
}

type HamburgerMenuButtonProps = {
  onClick: Function;
  title: string;
}
class HamburgerMenuButton extends Component<HamburgerMenuButtonProps, {}> {
  constructor(props: HamburgerMenuButtonProps) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.sidebarButton}
        onPress={_ => this.props.onClick()} >
        <Text style={styles.sidebarText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

type HamburgerButtonProps = {
  open: boolean | undefined;
  onClick: Function;
}
class HamburgerButton extends Component<HamburgerButtonProps, {}> {
  constructor(props: HamburgerButtonProps) {
    super(props);
  }

  render() {
    if (this.props.open) return null;
    return (
      <TouchableOpacity
        onPress={_ => this.props.onClick()}
        style={styles.logoParent} >
          <Image
            style={styles.logo}
            source={require('../Hamburger.png')} />
      </TouchableOpacity>
    );
  }
}

const DrawerStyles = {
    drawer: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRightWidth: 2,
      borderColor: 'rgba(34, 34, 34, 1)',
      shadowOffset:{ width: 10, height: 10, },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
    main: {

    }
  };

const styles = StyleSheet.create({
    sideBarParent: {
      alignItems: 'center'
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
    sidebarButton: {
      backgroundColor: '#DDDDDD',
      width: 180,
      height: 55,
      marginTop: 25,
      padding: 0,
      borderRadius: 10,
      textAlign: 'center',
      alignItems: 'center', 
      justifyContent: 'center'
    },
    sidebarText: {
      fontFamily: 'Robban',
      fontSize: 30,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    sidebarButtons: {
      position: 'absolute',
      top: 100,
    }
});

export { Hamburger, HamburgerMenuButton, HamburgerButton };