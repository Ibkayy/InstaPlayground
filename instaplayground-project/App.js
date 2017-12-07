import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StatusBar, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

//Import Custom Components here
import LogInButton from './src/components/LogInButton.js'


//code gives us the width and height of the current screen
const windowSize = Dimensions.get('window');

//put in the size definitions
const standardComponentWidth = (0.82 * windowSize.width);

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}

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
