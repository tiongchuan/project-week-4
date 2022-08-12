import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
    //justifyContent: 'space-evenly'
  },
  img: {
    height: height / 2,
    width: width / 1.2,
    resizeMode: 'contain',
    marginTop: 20
  },
  btns: {
    position: 'absolute',
    bottom: 240
  },
  btn: {
    height: 43,
    width: 150,
    backgroundColor: '#C52126',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20
  },
  btnText: {
    color: '#FFFFFF'
  }
})