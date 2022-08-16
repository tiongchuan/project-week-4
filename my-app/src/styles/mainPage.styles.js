import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
    //justifyContent: 'center',
  },
  img: {
    height: height * 0.4,
    width: width * 0.85,
    resizeMode: 'contain',
    top: height * 0.06,
  },
  btnContainer: {
    position: 'absolute',
    top: height * 0.6,
  },
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
  }
})