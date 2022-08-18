import React from 'react'
import { 
  View, 
  Text, 
  Keyboard,
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  ScrollView, 
} from 'react-native'
import styles from '../styles/requestTutor.styles'
import { Calendar } from 'react-native-calendars'

export const RequestTutorScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Calendar 
              markedDates={{
                '2022-08-16': {selected: true, marked: true, selectedColor: 'pink'},
                '2022-08-17': {marked: true},
                '2022-08-18': {marked: true, dotColor: '#FFFFFF', activeOpacity: 0},
                '2022-08-19': {marked: true}
              }}
              style = { styles.calendar }
              onDayPress= {( res ) => console.log ( res )}
              //current = { format ( baseDate )}
              //markedDates = { getMarkedDates ( baseDate, APPOINTMENTS )}
              enableSwipeMonths = { true }
              theme = {{
                calendarBackground: '#9D2427',
                selectedDayBackgroundColor: 'white',
                selectedDayTextColor: 'black',
                selectedDotColor: 'black',
                todayTextColor: 'pink',
                dayTextColor: '#FFFFFF',
                textDisabledColor: 'gray',
                dotColor: 'white',
                textDayFontSize: 12,
                monthTextColor: '#FFFFFF',
                textMonthFontWeight: 'bold',
                arrowColor: '#FFFFFF',
                'stylesheet.calendar.header': {
                  week: {
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                  }
                }
              }} />
            <View style = { styles.texts}>
              <View >
                <Text style = { styles.text }>Selected Date: 15/08/2022</Text>
                <Text style = { styles.text }>Additional Request:</Text>
              </View>
              <View>
                <Text style = { styles.text }>Time: 2 hours</Text>
                <Text style = { styles.text }>Total Price: 300SGD</Text>
              </View>
            </View>
            <View style = { styles.inputContainer }>
              <TextInput 
              style = { styles.input } 
              placeholder = "Additional Request" 
              multiline = { true }
              numberOfLines = { 5 }
              onChangeText = {( text ) => { text }}/>
            </View>
            <View style = { styles.btnContainer }>
              <TouchableOpacity 
                style = { styles.btn }
                onPress = {() => navigation.navigate( 'My Activity' )} >
                <Text style = { styles.btnText }>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}