import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StatusBar, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

//code gives us the width and height of the current screen
const windowSize = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  loginScreenComponent = () => {
    return (
      <ImageBackground
       style={viewStyles.container}
       resizeMode={'cover'}
       source={require('./src/images/instabackground1.jpg')}
      >

        <StatusBar
          barStyle={'light-content'}
        />

        <ScrollView style={viewStyles.scrollViewStyle}>
          <Image
            style={viewStyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />
        </ScrollView>

      </ImageBackground>
    );
  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewStyles = ({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramLogo: {
    width: (0.45 * windowSize.width),
    height: (0.15 * windowSize.height),
    marginBottom: 25,
    alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '30%'
  }
});
