import { StyleSheet, Dimensions } from "react-native";
import {useFonts} from 'expo-font';

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
    //justifyContent: 'space-evenly'
  },
  mainText:{
    justifyContent:'flex-start',
    alignContent:'flex-start',
  },
  p1:{
    // flex:1,
    fontSize: 50,
    //marginLeft:10,
    // justifyContent:'flex-start'
    // alignContent:'start',
    // alignSelf:'flex-start'
    // textAlign:'left'
  },
  p2:{
    fontSize: 40,
    fontStyle:'italic',
    fontFamily:'serif'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,
    resizeMode: 'cover',
    marginTop: 20,
    borderRadius: 200,
    // borderTopRightRadius: 60,
    // borderBottomRightRadius: 60
  },
  btns: {
    // position: 'absolute',
    // bottom: 240,
    flexDirection:'row',
    alignContent:'space-between',
    margin: height / 15

  },
  btn: {
    // height: 43,
    // width: 150,
    height: height / 20,
    width: width / 4,
    backgroundColor: '#9D2427',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20
  },
  btnText: {
    color: '#FFFFFF'
  },







  texts: {
    margin: 30,
  },
  text: {
    margin: 5,
    fontSize: 16
  }



})