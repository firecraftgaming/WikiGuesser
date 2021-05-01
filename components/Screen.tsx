import { Component } from 'react';
import { Hamburger } from '../components/Hamburger';
import { ScreenProps } from '../types';

export default class Screen<T> extends Component<ScreenProps, {open: boolean} & T> {
  public hamburger: Hamburger | null = null;
  public navigation: any;

  constructor(props: ScreenProps, init?: any) {
    super(props);
    this.navigation = props.navigation;
    init = init ?? {};
    this.state = {
      ...init,
      open: false
    }
  }
  
  onOpen() {
    this.setState({
        ...this.state,
        open: true
    });
  }

  onClose() {
    this.setState({
        ...this.state,
        open: false
    });
  }
}