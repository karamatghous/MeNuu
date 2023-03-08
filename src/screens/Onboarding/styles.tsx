import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  logoStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerstyle: {
    flex: 1,
    backgroundColor: '#08C0CA',
    paddingHorizontal: 40,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  backicon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backiconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  card: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
