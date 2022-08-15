import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
    //justifyContent: 'space-evenly'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,
    resizeMode: 'contain',
    marginTop: 30,
    borderRadius: 200
  },
  texts: {
    margin: 30,
  },
  text: {
    margin: 5,
    fontSize: 16
  }
  // btns: {
  //   position: 'absolute',
  //   bottom: 240
  // },
  // btn: {
  //   height: 43,
  //   width: 150,
  //   backgroundColor: '#C52126',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   margin: 10,
  //   borderRadius: 20
  // },
  // btnText: {
  //   color: '#FFFFFF'
  // }
})