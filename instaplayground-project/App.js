import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StatusBar, ScrollView, Linking } from 'react-native';
import Dimensions from 'Dimensions';

//Import Custom Components here
import LogInButton from './src/components/LogInButton.js'
import TappableText from './src/components/TappableText.js'


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
  borderWidth: 1,
  borderRadius: 5,
  twitterIcon: 18
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  buttonTapped = () => {
    console.log("Button successfully tapped");
  }

  forgotLoginDetailsComponent = (normalText, boldText, url) => {
    return (
      <View style = {viewStyles.forgotLoginDetailsContainer}>
        <Text style = {textStyles.forgotLoginDetails}>Forgot your login details?</Text>
        <TappableText
          textStyle = {[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold]}
          textTapped={ () => Linking.openURL(urls.forgotInstagramLogin)}
        >
          {boldText}
        </TappableText>
      </View>
    );
  }

  signUpComponent = () => {
    return (
      <View style = {viewStyles.signUpContainer}>
        <Text style = {textStyles.signUpDetails}>Do not have an account?</Text>
        <TappableText
          textStyle = {[textStyles.signUpDetails, textStyles.signUpDetailsBold]}
          textTapped={ () => Linking.openURL(urls.instagramSignUp)}
        >
          Sign Up
        </TappableText>
      </View>
    );
  }

  loginWithTwitterComponent = () => {
    return (
      <View style = {viewStyles.twitterContainer}>
        <Image
          resizeMode={'contain'}
          style={viewStyles.twitterIcon}
          source={require('./src/images/twitter_bird.png')}
        />
        <TappableText
          textStyle = {[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold, {fontSize: 12}]}
          textTapped={ () => Linking.openURL(urls.twitterLogin)}
        >
          Log In with Twitter
        </TappableText>
      </View>
    );
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

          <LogInButton
            buttonViewStyle={viewStyles.instagramLoginButtonView}
            buttonTextStyle={textStyles.instagramButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={viewStyles.instagramTouchableHighlightStyle}
            activeOpacity={0.75}
          >
            Log In (via Instagram)
          </LogInButton>

          <LogInButton
            buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
            buttonTextStyle={textStyles.instagramButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={[viewStyles.instagramTouchableHighlightStyle, viewStyles.facebookButtonTouchableHighlighStyle]}
            activeOpacity={0.75}
            iconSource={require('./src/images/facebook-white-logo.png')}
          >
            acebook
          </LogInButton>

          { this.forgotLoginDetailsComponent('Forgot your login details?', 'Get help signing in', urls.forgotInstagramLogin) }
          { this.orSeparatorComponent() }
          { this.loginWithTwitterComponent() }
          { this.signUpComponent() }

        </ScrollView>

      </ImageBackground>
    );
  }

  orSeparatorComponent = () => {
    return(
    <View style = {viewStyles.orSeparatorContainer}>
      <View style = {viewStyles.orSeparatorLine}/>
        <Text style = {textStyles.orSeparatorTextStyle}>OR</Text>
      <View style = {viewStyles.orSeparatorLine}/>
    </View>
    );
  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }

}

const viewStyles = {
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
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: sizes.borderWidth,
    borderRadius: sizes.boredrRadius,
    width: standardComponentWidth,
    paddingHorizontal: 10,
    height: sizes.buttonHeight
  },
  facebookLoginButtonView: {
    backgroundColor: colors.facebook,
  },
  forgotLoginDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  },
  facebookButtonTouchableHighlighStyle: {
    marginTop: 20,
    marginBottom: 5
  },
  instagramTouchableHighlightStyle: {
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop: 5
  },
  twitterContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  twitterIcon: {
    width: sizes.twitterIcon,
    height: sizes.twitterIcon,
    marginHorizontal: 4
  },
  orSeparatorContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '7%'
  },
  orSeparatorLine: {
    height: 1,
    flex: 5,
    backgroundColor: colors.socialMediaButtonBorderColor,
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: 0.5,
    marginHorizontal: 5
  }
};

const textStyles = {
  instagramButtonTextStyle: {
    color: colors.text,
    fontWeight: '500'
  },
  forgotLoginDetails: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: sizes.pageFontSize,
    marginRight: 3
  },
  forgotLoginDetailsBold: {
    fontWeight: 'bold'
  },
  signUpDetails: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: sizes.pageFontSize,
    marginRight: 3
  },
  signUpDetailsBold: {
    fontWeight: 'bold'
  },
  orSeparatorTextStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 13
  }
};
