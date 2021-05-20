import {StyleSheet} from 'react-native';
import {
  WHITE_COLOR,
  BLACK_COLOR,
  TEXT_INPUT_ICON_BG,
} from '../../Assets/themes/color';
import {FONT_SIZE_h3, FONT_SIZE_h6} from '../../Assets/themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImgStyle: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    margin: '2%',
    backgroundColor: '#cbd1cc',
    height: '97%',
    //   width:'97%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
  },
  gradientStyle: {
    flex: 0.35,
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgStyle: {
    width: 110,
    height: 110,
    borderColor: WHITE_COLOR,
    borderWidth: 1,
    borderRadius: 55,
  },
  coverImageContainer: {
    backgroundColor: '#000',
  },
  iconOverImageStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: WHITE_COLOR,
    width: 30,
    borderColor: WHITE_COLOR,
    borderWidth: 0.5,
    borderRadius: 15,
    height: 30,
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
  },
  profileBottomSection: {
    backgroundColor: 'white',
    flex: 0.65,
    margin: 10,
    marginTop: -10,
  },
  profileHeaderContainer: {alignItems: 'center'},
  profileHeadTextStyle: {
    fontSize: FONT_SIZE_h3,
    fontWeight: 'bold',
  },
  genderHeadTextStyle: {
    marginLeft: '5%',
    color: TEXT_INPUT_ICON_BG,
  },
  genderSelectionContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  saveBtnContainer: {
    width: '85%',
    marginLeft: '5%',
    borderColor: WHITE_COLOR,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  saveBtnTextStyle: {
    color: WHITE_COLOR,
    padding: 7,
    fontSize: FONT_SIZE_h6,
  },
});

export default styles;
