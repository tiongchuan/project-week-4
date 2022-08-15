import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
    //justifyContent: 'center',
  },
  text: {

  },
  inputContainer: {
    //backgroundColor: 'red',
    alignItems: 'center',
    top: height * 0.15,
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: height * 0.3,
    width: width * 0.75,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(219, 219, 219, 0.2)',
  },
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#C52126',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  btnText: {
    color: 'white',
  }
})