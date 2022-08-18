import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#D9D9D9',
    //justifyContent: 'space-evenly'
    // paddingLeft: 30
  },
  search: {
    backgroundColor: '#FFFFFF',

    // width: width / 1.2,

    height: 40,
    borderRadius: 20,
    padding: 10,
    // top: 20,
    // marginBottom: 10,
    borderColor:'#009688',
    borderWidth: 1,
    margin: 10,
    // paddingLeft: 20,
  },
  listings: {
    flex: 1,
    height: height,

    // width: width / 1.2,
    // marginTop: 20,

  },
  listing: {
    flex:1,
    //position: 'absolute',
    height: 100,
    backgroundColor: '#9D2427',
    marginTop: 18,
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {

      width: 8,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17
  },
  text0:{
    flex:2,
    justifyContent:'center',
    paddingHorizontal:width/20

  },
  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    color: '#FFFFFF'
  },
  img: {
    // flex:1,
    position: 'relative',
    height: 70,
    width: width / 6,
    borderRadius: 60
  },
  price: {
    flex:1,
    fontSize: 30,
    color: '#FFFFFF',
    //fontStyle: 'italic',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  footer: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 'bold'
  },
  empty: {
    fontSize: 30,
    textAlign: "center",
    height: 100,
    backgroundColor: '#9D2427',
    marginTop: 18,
    borderRadius: 20,
    padding: 25,
  },
  spinner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

})