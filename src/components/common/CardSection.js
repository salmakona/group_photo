/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle:{
    padding:15,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  }
})


export { CardSection };


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
