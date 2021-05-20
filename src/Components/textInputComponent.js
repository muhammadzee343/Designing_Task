import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {
  BLACK_COLOR,
  LIGHT_GRAY,
  WHITE_COLOR,
  TEXT_INPUT_ICON_BG,
} from '../Assets/themes/color';

function TextInputComponent(props) {
  return (
    <View style={styles.changePasswordContantContainer}>
      <View style={styles.textHeadContainer}>
        <Text style={styles.emailHeadTextStyle}>{props.titleString}</Text>
      </View>
      <View style={styles.sectionStyle}>
        <View style={styles.iconCircleStyle}>{props.imageName}</View>
        <TextInput placeholder={props.placeString} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  changePasswordContantContainer: {
    width: '100%',
    // marginTop: '1%',
  },
  textHeadContainer: {
    width: '85%',
    marginLeft: '5%',
  },
  emailHeadTextStyle: {
    color: TEXT_INPUT_ICON_BG,
  },
  sectionStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: LIGHT_GRAY,
    width: '85%',
    height: 50,
    borderRadius: 25,
    margin: 10,
    paddingLeft: 10,
  },
  imageStyle: {
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  iconCircleStyle: {
    backgroundColor: TEXT_INPUT_ICON_BG,
    width: 40,
    borderColor: TEXT_INPUT_ICON_BG,
    borderWidth: 0.5,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: BLACK_COLOR,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 4,
    },
    elevation: 9,
    marginRight: 10,
  },
});
export default TextInputComponent;
