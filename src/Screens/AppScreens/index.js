import React, {PureComponent} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  View,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Ripple from 'react-native-material-ripple';
import ProfileIcon from '../../Assets/icons/ProfileIcon';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  TEXT_INPUT_ICON_BG,
} from '../../Assets/themes/color';
import TextInputComponent from '../../Components/textInputComponent';
import {FONT_SIZE_h6} from '../../Assets/themes/fonts';
import EmailIcon from '../../Assets/icons/EmailIcon';
import PhoneIcon from '../../Assets/icons/PhoneIcon';
import CalendarIcon from '../../Assets/icons/CalendarIcon';

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isMaleEnabled: false,
      isFemaleEnabled: false,
    };
  }
  componentDidMount() {
    StatusBar.setHidden(true, 'none');
  }
  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
        });
      })
      .catch(e => alert(e));
  }
  renderImage(image) {
    return (
      <Image
        style={{width: '90%', height: '90%', resizeMode: 'cover'}}
        source={image}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Assets/images/bgImage.jpg')}
          style={styles.bgImgStyle}>
          <View style={styles.innerContainer}>
            <LinearGradient
              colors={['#b0076f', '#59069c']}
              style={styles.gradientStyle}>
              <Ripple
                onPress={() => {
                  this.pickSingleWithCamera(false);
                }}>
                <Image
                  source={
                    this.state.image
                      ? this.state.image
                      : require('../../Assets/images/bgImage.jpg')
                  }
                  style={styles.profileImgStyle}
                />
                <View style={styles.iconOverImageStyle}>
                  <ProfileIcon iconColor={BLACK_COLOR} />
                </View>
              </Ripple>
            </LinearGradient>
            <ScrollView style={styles.profileBottomSection}>
              <View style={styles.profileHeaderContainer}>
                <Text style={styles.profileHeadTextStyle}>User Profile</Text>
              </View>
              <TextInputComponent
                titleString="User Name"
                placeString="Enter User Name"
                imageName={<ProfileIcon iconColor={WHITE_COLOR} />}
              />
              <TextInputComponent
                titleString="Email Id"
                placeString="Enter Email"
                imageName={<EmailIcon iconColor={WHITE_COLOR} />}
              />
              <TextInputComponent
                titleString="Mobile Number"
                placeString="Enter mobile number"
                imageName={<PhoneIcon iconColor={WHITE_COLOR} />}
              />
              <TextInputComponent
                titleString="Date of Birth"
                placeString="DD / MM / YYYY"
                imageName={<CalendarIcon iconColor={WHITE_COLOR} />}
              />
              <View style={{width: '85%'}}>
                <Text style={styles.genderHeadTextStyle}>Sex</Text>
                <View style={styles.genderSelectionContainer}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={
                      this.state.isMaleEnabled ? '#767577' : '#f4f3f4'
                    }
                    value={this.state.isMaleEnabled}
                    onValueChange={value => {
                      this.setState({isMaleEnabled: value});
                    }}
                    style={{marginLeft: '5%'}}
                  />
                  <Text>Male</Text>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={
                      this.state.isFemaleEnabled ? '#767577' : '#f4f3f4'
                    }
                    value={this.state.isFemaleEnabled}
                    onValueChange={value => {
                      this.setState({isFemaleEnabled: value});
                    }}
                    style={{marginLeft: '5%'}}
                  />
                  <Text>Female</Text>
                </View>
              </View>
              <LinearGradient
                colors={['#b0076f', '#59069c']}
                style={styles.saveBtnContainer}>
                <Text style={styles.saveBtnTextStyle}>Save</Text>
              </LinearGradient>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default MainScreen;
