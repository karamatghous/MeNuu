import React, {useRef, useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-remix-icon';
import {Dimensions} from 'react-native';

export default function Slider({navigation}) {
  const ref = useRef(null as any);
  const [ind, setind] = useState();
  const slides = [
    {
      key: 1,
      title: 'A super helpful\napp feature.',
      text: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.',
      image: require('../../assets/images/slider1.png'),
      backgroundColor: '#08C0CA',
    },
    {
      key: 2,
      title: 'A super helpful\napp feature.',
      text: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.',
      image: require('../../assets/images/slider2.png'),
      backgroundColor: '#FCBD56',
    },
    {
      key: 3,
      title: 'A super helpful\napp feature.',
      text: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.',
      image: require('../../assets/images/slider3.png'),
      backgroundColor: '#E417D4',
    },
  ];
  const _renderItem = ({item}) => {
    return (
      <>
        <View
          style={[
            styles.slidercontainer,
            {backgroundColor: item.backgroundColor},
          ]}>
          <Image style={{alignSelf: 'center'}} source={item.image} />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.slidertextcontaainer}>
            <Text style={styles.titletext}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </>
    );
  };
  const _renderNextButton = () => {
    setind(ref?.current?.state?.activeIndex);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            ref?.current?.goToSlide(ind + 1);
          }}>
          <View
            style={[
              styles.nexticon,
              {backgroundColor: slides[ind]?.backgroundColor},
            ]}>
            <Icon name="ri-arrow-right-s-line" size="20" color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Onboarding');
        }}>
        <View>
          <Text style={styles.text}>Done</Text>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(ref);
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{justifyContent: 'center'}}>
        <AppIntroSlider
          data={slides}
          ref={ref}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          renderItem={_renderItem}
          dotStyle={{backgroundColor: slides[ind]?.backgroundColor}}
          activeDotStyle={{backgroundColor: 'gray'}}
          showDoneButton={true}
        />
      </View>
    </ScrollView>
  );
}
