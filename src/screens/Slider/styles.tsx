import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  logoStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerstyle: {
    flex: 1,
    backgroundColor: '#08C0CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    color: '#0F2C67',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    lineHeight: 38.4,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#C4C4C4',
    fontSize: 12,
    marginVertical: 20,
  },
  nexticon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidercontainer: {
    // backgroundColor: item.backgroundColor,
    height: 480,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  slidertextcontaainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    aspectRatio: 5,
  },
});
