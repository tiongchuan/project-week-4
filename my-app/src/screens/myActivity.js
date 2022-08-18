import React from 'react'
import styles from '../styles/myActivity.styles'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

export const MyActivityScreen = ({ navigation }) => {
  
  return (
    <View style = { styles.container }>
      <ScrollView>
        <View style = { styles.containerStatus }>
          <View style = { styles.listings }>
            <TouchableOpacity
              style = { styles.listing }>
              <View>
                <Text style = { styles.text1 }>Date: <Text style = { styles.text2 }>20/8/2022</Text></Text>
                <Text style = { styles.text1 }>Time: <Text style = { styles.text2 }>1.30pm-3.30pm</Text></Text>
                <Text style = { styles.text1 }>Tutor: <Text style = { styles.text2 }>TC Ong</Text></Text>
              </View>
              <Text style = { styles.status }>Pending...</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.listing }>
              <View>
                <Text style = { styles.text1 }>Date: <Text style={styles.text2}>23/7/2022</Text></Text>
                <Text style = { styles.text1 }>Time: <Text style={styles.text2}>1.30pm-3.30pm</Text></Text>
                <Text style = { styles.text1 }>Tutor: <Text style={styles.text2}>TC Ong</Text></Text>
              </View>
              <Text style = { styles.status }>Pending...</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.listing }>
              <View>
                <Text style = { styles.text1 }>Date: <Text style = { styles.text2 }>23/7/2022</Text></Text>
                <Text style = { styles.text1 }>Time: <Text style = { styles.text2 }>1.30pm-3.30pm</Text></Text>
                <Text style = { styles.text1 }>Tutor: <Text style = { styles.text2 }>TC Ong</Text></Text>
              </View>
              <Text style = { styles.status }>Pending...</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.listing }
              onPress = {() => navigation.navigate('BookingStatus')}>
              <View>
                <Text style = { styles.text1 }>Date: <Text style = { styles.text2} >23/7/2022</Text></Text>
                <Text style = { styles.text1 }>Time: <Text style = { styles.text2 }>1.30pm-3.30pm</Text></Text>
                <Text style = { styles.text1 }>Tutor: <Text style = { styles.text2 }>TC Ong</Text></Text>
              </View>
              <Text style = { styles.status }>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.listing }>
              <View>
                <Text style = { styles.text1 }>Date: <Text style = { styles.text2 }>10/7/2022</Text></Text>
                <Text style = { styles.text1 }>Time: <Text style = { styles.text2 }>3.30pm-5.30pm</Text></Text>
                <Text style = { styles.text1 }>Tutor: <Text style = { styles.text2 }>TC Ong</Text></Text>
              </View>
              <Text style = { styles.status }>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>


  )
}



