import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
    //justifyContent: 'center',
  },
  innerContainer: {
    padding: 0,
    height: height,
    //alignItems: 'center'
  },
  calendar: {
    width: width / 1.2,
    marginTop: 20,
    height: 370,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  texts: {
    marginTop: 20,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    margin: 10
  },
  inputContainer: {
    //justifyContent: 'flex-start'
    //top: height * 0.15,
  },
  input: {
    height: height / 6,
    width: width / 1.2,
    marginTop: 20,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
    borderColor: '#D9D9D9'
  },
  btnContainer: {
    alignItems: 'center'
  },
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  btnText: {
    color: 'white',
  }
})