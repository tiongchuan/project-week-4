import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //flexDirection: 'column',
    //margin: 10
  },
  inner: {
    padding: 0,
    justifyContent: 'flex-end'
  },
  img: {
    height: height / 3,
    width: width,
    resizeMode: 'contain',
    top: 20,
    marginBottom: 10
  },
  btn: {
    height: 43,
    width: 150,
    backgroundColor: '#C52126',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  login: {
    color: 'white',
    //fontSize: 16
  },
  inputField: {
    alignItems: 'center',
    top: 25
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: 46,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(219, 219, 219, 0.2)'
  },
  text: {
    color: 'gray',
    fontSize: 12
  }
})