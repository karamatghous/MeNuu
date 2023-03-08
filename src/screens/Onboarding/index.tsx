import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-remix-icon';
import Button from '../../components/button';
export default function Onboarding({navigation}) {
  const itemArr = [
    {id: 1, name: 'TGI Fridays', image: require('../../assets/images/tgi.png')},
    {
      id: 2,
      name: 'Starbucks',
      image: require('../../assets/images/starbucks.png'),
    },
    {id: 3, name: 'KFC', image: require('../../assets/images/kfc.png')},
    {id: 4, name: 'Nando’s', image: require('../../assets/images/nandos.png')},
    {id: 5, name: 'McDonald’s', image: require('../../assets/images/mc.png')},
    {
      id: 6,
      name: 'Domino’s Pizza',
      image: require('../../assets/images/dominos.png'),
    },
    {id: 7, name: 'LEON', image: require('../../assets/images/leon.png')},
    {
      id: 8,
      name: 'wagamama',
      image: require('../../assets/images/wagamama.png'),
    },
  ];
  return (
    <ScrollView style={{backgroundColor: '#08C0CA'}}>
      <View style={styles.containerstyle}>
        <View style={styles.backiconcontainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Icon name="ri-arrow-left-s-line" size="20" color="#232323" />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Pick your Favourites</Text>
          <Icon name="ri-arrow-left-s-line" size="20" color="transparent" />
        </View>
        <FlatList
          data={itemArr}
          numColumns={2}
          renderItem={({item, index}) => (
            <View style={{flex: 1 / 2}}>
              <TouchableOpacity>
                <View style={styles.card}>
                  <Image source={item.image}></Image>
                </View>
              </TouchableOpacity>
              <Text style={[styles.text, {marginVertical: 10}]}>
                {item.name}
              </Text>
            </View>
          )}
        />
        <Button
          title="Continue "
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </ScrollView>
  );
}
