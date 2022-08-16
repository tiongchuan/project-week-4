import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 20
    //justifyContent: 'space-evenly'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,
    //resizeMode: 'contain',
    marginTop: 20,
    borderColor: 'gray',
    borderRadius: 200
  },
  texts: {
    margin: 30
  },
  text: {
    fontSize: 15
  },
  btn: {
    height: 43,
    width: 150,
    backgroundColor: '#9D2427',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20
  },
  btnText: {
    color: '#FFFFFF'
  }
})