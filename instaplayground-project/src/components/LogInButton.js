import React, { Component } from 'react';
import {Text, View, TouchableHighLight, Image} from 'react-native';

class LoginInButton extends Component {

  constructor(props) {
    super(props);
  }

  getViewComponent = () => {
    if(this.props.iconSource){
      return (
        <View style={this.props.buttonViewStyle}>
          <Image
            resizeMode={'contain'}
            style={[ {width: 30, height: 30}, ths.props.iconStyle]}
            source={this.props.iconSource}
          />
          <Text style = {[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>{this.props.children}</Text>
        </View>
      );
    }
    else{
      return (
        <View style={this.props.buttonViewStyle}>
          <Text style = {[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>{this.props.children}</Text>
        </View>
      );
    }
  }

  render() {
    return(
      <TouchableHighLight
        underlayColor={'transparent'}
        activeOpacity={this.props.activeOpacity}
        style={[this.props.touchableHighLightStyle, viewStyles.touchableHighLightStyle]}
        onPress={this.props.buttonTapped}
      >
        <View style={this.props.buttonViewStyle}>
          <Text style = {[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>{this.props.children}</Text>
        </View>
      </TouchableHighLight>
    );
  }

}

const viewStyles = {
  touchableHighLightStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

};

const textStyles = {

};

export default LoginInButton;
