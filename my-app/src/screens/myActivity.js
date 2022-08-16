import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from 'react-native'
import styles from '../styles/myActivity.styles'
import { useState, useEffect } from 'react'
import API from '../services/API.service'
import { GetData } from '../services/tutorsListing.service'



export const MyActivityScreen = ({ navigation }) => {


  return (


    // <GetData />

    <View style={styles.container}>
    <View style={styles.containerStatus}>
      <ScrollView>
        <View style={styles.listings}>

          <TouchableOpacity
            style={styles.listing}
            // onPress={() => navigation.navigate('BookingStatus')}
            >
            <View>
              <Text style={styles.text1}>Date: <Text style={styles.text2}>23/7/2022</Text></Text>
              <Text style={styles.text1}>Time: <Text style={styles.text2}>1.30pm-3.30pm</Text></Text>
              <Text style={styles.text1}>Tutor: <Text style={styles.text2}>TC Ong</Text></Text>
            </View>
            <Text style={styles.status}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listing}
            // onPress={() => navigation.navigate('BookingStatus')}
            >

            <View>
              <Text style={styles.text1}>Date: <Text style={styles.text2}>23/7/2022</Text></Text>
              <Text style={styles.text1}>Time: <Text style={styles.text2}>1.30pm-3.30pm</Text></Text>
              <Text style={styles.text1}>Tutor: <Text style={styles.text2}>TC Ong</Text></Text>
            </View>
            <Text style={styles.status}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listing}
            // onPress={() => navigation.navigate('BookingStatus')}
            >

            <View>
              <Text style={styles.text1}>Date: <Text style={styles.text2}>23/7/2022</Text></Text>
              <Text style={styles.text1}>Time: <Text style={styles.text2}>1.30pm-3.30pm</Text></Text>
              <Text style={styles.text1}>Tutor: <Text style={styles.text2}>TC Ong</Text></Text>
            </View>
            <Text style={styles.status}>Pending</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listing}
            onPress={() => navigation.navigate('BookingStatus')}>

            <View>
              <Text style={styles.text1}>Date: <Text style={styles.text2}>23/7/2022</Text></Text>
              <Text style={styles.text1}>Time: <Text style={styles.text2}>1.30pm-3.30pm</Text></Text>
              <Text style={styles.text1}>Tutor: <Text style={styles.text2}>TC Ong</Text></Text>
            </View>
            <Text style={styles.status}>Pending</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.listing}
            // onPress={() => navigation.navigate('BookingStatus')}
            >
            <Text style={styles.status}>23/4/2022</Text>
            <View>
              <Text style={styles.text1}>TC Ong</Text>
              <Text style={styles.text2}>Mathematic</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

    </View>
    <View  style={styles.containertbn}>
        <TouchableOpacity
          style={styles.homebtn}
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.hometext}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>


  )
}



