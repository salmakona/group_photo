import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    Image, ImageBackground,
    TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NextButton, Card, CardSection,BackButton, CardImage } from './common';

class AboutScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/about_screen.png')}
        style={styles.backgroundImageStyle}>

        <ScrollView>
          <Card>
            <CardSection>
              <View style={styles.headerStyle}>
                <View style={{ flex: 1 }} >
                  <BackButton onPress={() => Actions.main()}>
                    <Image source={require('../assets/back_arrow.png')} />
                  </BackButton>
                </View>
              </View>
            </CardSection>
            <CardSection>
              <CardImage>
                <Image source={require('../assets/group_photo.png')} />
              </CardImage>
            </CardSection>

            <CardSection>
              <View style={styles.pageInnationContainerStyle}>
                <View style={[styles.bullet, styles.activeBullet]}></View>
                <TouchableOpacity onPress={() => Actions.browseScreen()}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.publishScreen()}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.makeMoneyScreen()}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
              </View>
            </CardSection>

            <CardSection>
              <View>
                <Text style={styles.headingStyle}>Group Photo</Text>
              </View>
              <View>
                <Text style={styles.descriptionStyle}> Take photos and initialy shake them with a small group </Text>
              </View>
            </CardSection>

            <CardSection>
              <NextButton
                onPress={() => Actions.browseScreen()}>
                Next
              </NextButton>
            </CardSection>


          </Card>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = {
  backgroundImageStyle: {
    width: '100%',
    height: '100%'
  },
  headerStyle: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  headingStyle: {
    fontSize: 40,
    color: '#414472',
    fontWeight: '500',
    marginBottom: 10
  },
  descriptionStyle: {
    fontSize: 20,
    color: '#414472',
    fontWeight: '500',
    textAlign: 'center'
  },
  pageInnationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1
  },
  bullet: {
    // fontSize: 10,
    width: 10,
    height: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: '#414472',
    opacity: 0.5
  },
  activeBullet: {
    // fontSize: 10,
    width: 30,
    height: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: '#414472',
    opacity: 1
  }
}

export default AboutScreen;


// Valid style props: [
//   "alignContent",
//   "alignItems",
//   "alignSelf",
//   "aspectRatio",
//   "backfaceVisibility",
//   "backgroundColor",
//   "borderBottomColor",
//   "borderBottomEndRadius",
//   "borderBottomLeftRadius",
//   "borderBottomRightRadius",
//   "borderBottomStartRadius",
//   "borderBottomWidth",
//   "borderColor",
//   "borderEndColor",
//   "borderEndWidth",
//   "borderLeftColor",
//   "borderLeftWidth",
//   "borderRadius",
//   "borderRightColor",
//   "borderRightWidth",
//   "borderStartColor",
//   "borderStartWidth",
//   "borderStyle",
//   "borderTopColor",
//   "borderTopEndRadius",
//   "borderTopLeftRadius",
//   "borderTopRightRadius",
//   "borderTopStartRadius",
//   "borderTopWidth",
//   "borderWidth",
//   "bottom",
//   "color",
//   "decomposedMatrix",
//   "direction",
//   "display",
//   "elevation",
//   "end",
//   "flex",
//   "flexBasis",
//   "flexDirection",
//   "flexGrow",
//   "flexShrink",
//   "flexWrap",
//   "fontFamily",
//   "fontSize",
//   "fontStyle",
//   "fontVariant",
//   "fontWeight",
//   "height",
//   "includeFontPadding",
//   "justifyContent",
//   "left",
//   "letterSpacing",
//   "lineHeight",
//   "margin",
//   "marginBottom",
//   "marginEnd",
//   "marginHorizontal",
//   "marginLeft",
//   "marginRight",
//   "marginStart",
//   "marginTop",
//   "marginVertical",
//   "maxHeight",
//   "maxWidth",
//   "minHeight",
//   "minWidth",
//   "opacity",
//   "overflow",
//   "overlayColor",
//   "padding",
//   "paddingBottom",
//   "paddingEnd",
//   "paddingHorizontal",
//   "paddingLeft",
//   "paddingRight",
//   "paddingStart",
//   "paddingTop",
//   "paddingVertical",
//   "position",
//   "resizeMode",
//   "right",
//   "rotation",
//   "scaleX",
//   "scaleY",
//   "shadowColor",
//   "shadowOffset",
//   "shadowOpacity",
//   "shadowRadius",
//   "start",
//   "textAlign",
//   "textAlignVertical",
//   "textDecorationColor",
//   "textDecorationLine",
//   "textDecorationStyle",
//   "textShadowColor",
//   "textShadowOffset",
//   "textShadowRadius",
//   "textTransform",
//   "tintColor",
//   "top",
//   "transform",
//   "transformMatrix",
//   "translateX",
//   "translateY",
//   "width",
//   "writingDirection",
//   "zIndex"
// ]
