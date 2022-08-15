import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import styles from '../styles/tutorsListing.styles'
import profileImg from '../assets/profileImg.jpg'
                                       
export const TutorsListingScreen = ({ navigation }) => {

  return (
    <View style = { styles.container }>
      <TextInput style = { styles.search } placeholder = 'Search'/>
      <ScrollView>
        <View style = {styles.listings }>
          <TouchableOpacity
            style = { styles.listing }
            onPress = {() => navigation.navigate( 'Tutor profile' )}>
            <Image style = { styles.img } source = { profileImg }/>
            <View>
              <Text style = { styles.text1 }>Wilson Ong</Text>
              <Text style = { styles.text2 }>English</Text>
            </View>
            <Text style = { styles.price }>S$150</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style = { styles.listing }
            onPress = {() => navigation.navigate( 'Tutor profile' )}>
            <Image style = { styles.img } source = { profileImg }/>
            <View>
              <Text style = { styles.text1 }>TC Ong</Text>
              <Text style = { styles.text2 }>Mathematic</Text>
            </View>
            <Text style = { styles.price }>S$110</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style = { styles.listing }
            onPress = {() => navigation.navigate( 'Tutor profile' )}>
            <Image style = { styles.img } source = { profileImg }/>
            <View>
              <Text style = { styles.text1 }>Valerie Lim</Text>
              <Text style = { styles.text2 }>Art</Text>
            </View>
            <Text style = { styles.price }>S$100</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style = { styles.listing }
            onPress = {() => navigation.navigate( 'Tutor profile' )}>
            <Image style = { styles.img } source = { profileImg }/>
            <View>
              <Text style = { styles.text1 }>Mia Kim</Text>
              <Text style = { styles.text2 }>History</Text>
            </View>
            <Text style = { styles.price }>S$110</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style = { styles.listing }
            onPress = {() => navigation.navigate( 'Tutor profile' )}>
            <Image style = { styles.img } source = { profileImg }/>
            <View>
              <Text style = { styles.text1 }>Thomas Yeo</Text>
              <Text style = { styles.text2 }>Science</Text>
            </View>
            <Text style = { styles.price }>S$150</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View> 
  )
}