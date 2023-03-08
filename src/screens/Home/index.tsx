import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-remix-icon';
const itemArr = [
  {
    id: 1,
    name: 'Burgers',
    image: require('../../assets/images/burger.png'),
    place: '5 places',
  },
  {
    id: 2,
    name: 'Pizza',
    image: require('../../assets/images/pizza.png'),
    place: '5 places',
  },
  {
    id: 3,
    name: 'Steak',
    image: require('../../assets/images/steak.png'),
    place: '5 places',
  },
  {
    id: 4,
    name: 'Greens',
    image: require('../../assets/images/carrot.png'),
    place: '5 places',
  },
  {
    id: 5,
    name: 'Coffee',
    image: require('../../assets/images/cofee.png'),
    place: '5 places',
  },
  {
    id: 6,
    name: 'Sweet',
    image: require('../../assets/images/cake.png'),
    place: '5 places',
  },
  {
    id: 7,
    name: 'Raw',
    image: require('../../assets/images/sushi.png'),
    place: '5 places',
  },
];
const itemArr2 = [
  {
    id: 1,
    name: 'McDonalds',
    image: require('../../assets/images/mc2.png'),
    dishes: '16 Dishes',
    description:
      'Discover our Menu, with every one of our meals, snacks, drinks, and more.',
  },
  {
    id: 2,
    name: 'Nandos',
    image: require('../../assets/images/nandos2.png'),
    dishes: '23 Dishes',
    description:
      "Afro-Portuguese and famous for flame-grilled PERi-PERi. It can only be Nando's",
  },
  {
    id: 3,
    name: 'TGI Fridays',
    image: require('../../assets/images/tgi2.png'),
    dishes: '10 Dishes',
    description:
      'Serving Mouth-Watering American Dishes. Grills, Salad, Chicken & Vegan Options',
  },
  {
    id: 4,
    name: 'Burger King',
    image: require('../../assets/images/bk.png'),
    dishes: '12 Dishes',
    description: 'Double Whopper, Crispy Chicken or Chilli Cheese Bites?',
  },
  {
    id: 5,
    name: 'KFC',
    image: require('../../assets/images/kfc2.png'),
    dishes: '9 Dishes',
    description: 'The chicken, the whole chicken and nothing but the chicken.',
  },
];
export default function Home() {
  return (
    <ScrollView>
      <View style={styles.containerstyle}>
        <View style={styles.headercontainer}>
          <Icon name="ri-arrow-left-s-line" size="20" color="transparent" />
          <Text style={styles.text}>Home</Text>
          <View style={styles.icon}>
            <Image source={require('../../assets/icons/logo2.png')}></Image>
          </View>
        </View>
        <Text style={styles.text}>Top Categories</Text>
        <View>
          <FlatList
            data={itemArr}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => (
              <View style={{marginHorizontal: 5, marginTop: 5}}>
                <TouchableOpacity>
                  <View style={styles.card1}>
                    <Image source={item.image}></Image>
                  </View>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.text,
                    {marginVertical: 7, textAlign: 'center'},
                  ]}>
                  {item.name}
                </Text>
                <Text style={styles.textlight}>{item.place}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.pickscontainer}>
          <Text style={styles.text}>Your Picks</Text>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text}>Show all</Text>
              <Icon name="ri-arrow-right-s-line" size="20" color="#232323" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={itemArr2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.cardcontainer}>
                <View style={styles.card2}>
                  <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
                    <Image source={item.image}></Image>
                    <View
                      style={{
                        marginLeft: 10,
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.text}>{item.name}</Text>

                      <Text
                        numberOfLines={2}
                        style={[
                          styles.textlight,
                          {textAlign: 'left', width: 200},
                        ]}>
                        {item.description}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'baseline',
                        }}>
                        <Image
                          source={require('../../assets/icons/utensils.png')}></Image>
                        <Text
                          style={[styles.text, {fontSize: 12, marginLeft: 5}]}>
                          {item.dishes}
                        </Text>
                      </View>
                    </View>
                    <Icon name="ri-heart-3-line" size="24" color="#C4C4C4" />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
