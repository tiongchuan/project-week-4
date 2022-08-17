import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import styles from '../styles/tutorsListing.styles'
import profileImg from '../assets/profileImg.jpg'
import API from "../services/API.service";


export const TutorsListingScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors() {
    API.get('./general/tutors')
      .then(function (response) {
        // console.log(response.data.data);
        setTutors(response.data.data);
        (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.empty}>No data found</Text>
      </View>
    );
  };

  // console.log(isLoading);

  return (

    <SafeAreaView style = {styles.listings }>
      {isLoading ? <View style={styles.spinner}><ActivityIndicator size='large' color='#9D2427'/></View> :
      <FlatList
        data={tutors}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listing} 
          onPress={() => navigation.navigate('Tutor profile', {item})}>
              <Image style={styles.img} source={profileImg} />
              <View>
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text2}>Experience: {item.experience} yrs</Text>
        </View>
        <Text style={styles.price}>${item.hourlyRate}</Text>
          </TouchableOpacity>
        )}
                 ListHeaderComponent={() => (
            <Text style={styles.header}>
              List of Tutors
            </Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.footer}>
              End of List</Text>
          )}
          ListEmptyComponent={myListEmpty}
      />
          }
</SafeAreaView>
  )
}